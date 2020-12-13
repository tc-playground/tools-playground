# React Testing

## Introduction

> Rather than testing a component's implementation details, React Testing Library puts the developer in the shoes of an end user of an React application.

* `React Testing` allows us to `render` a React component and test the result.

---

## React testing

* The `render` function can be used convert a `JSX` component to `HTML` output.

* The `screen` component can be used to display the output `screen.debug()`.

  * `screen.debug()` - Display the rendered HTML.

* The ` screen` component can be used to access `selector functions` to select elements.

  * `screen.getByText('Search:');` - Exact string.

  * `expect(screen.getByText(/Search/));` - Regex.

* The `components` can then be tested using Jest `matchers`.

  * `expect(screen.getByText('Search:')).toBeInTheDocument();`

---

## React Testing Library - Search Types

* __ByText__

  * Retrieve elements by exact `text` or `regex`.

* __ByRole__

  * Retrieve elements by `aria-label attributes.` 

  * Retrieve elements by `HTML role`. [ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

  * `screen.getByRole('')` - Display selectable roles.

  > Often it isn't necessary to assign aria roles to HTML elements explicitly for the sake of testing, because the DOM already has implicit roles attached to HTML elements.

* __LabelText__

* __ByPlaceholderText__

* __ByAltText__

* __ByDisplayValue__


---

## React testing Library Search Variants - `get`, `find` and `query`

* `get` variants returns an `element` or an `error`. Not suitable for `asserting` elements that are not there.

  > Default to `get`.

* `query` variants do not return an error and can be used for `asserting` that an element isn't there.

  > If you assert for a missing element, use `query`.

* `find` variants are used for `asynchronous elements` that will be there eventually.

  * e.g. an API call that returns a `Promise` that `resolves` to an object required in a render. Test `conditinal rendering`.

  > For any element that isn't there yet but will be there eventually, use `find` over `get` or `query`. 


* __Get Variants__

  * `getByText`
  * `getByRole`
  * `getByLabelText`
  * `getByPlaceholderText`
  * `getByAltText`
  * `getByDisplayValue`

* __Query Variants__

  * `queryByText`
  * `queryByRole`
  * `queryByLabelText`
  * `queryByPlaceholderText`
  * `queryByAltText`
  * `queryByDisplayValue`

* __Find Variants__

  * `findByText`
  * `findByRole`
  * `findByLabelText`
  * `findByPlaceholderText`
  * `findByAltText`
  * `findByDisplayValue`

  > `async await` cna be used to wait for certain elements to appear with the `findBy` search variants

---

## React testing Library Mulitple Variants

* __getAll__

* __findAll__

* __queryAll__

---

## React Testing Library - Extend assertions

* `toBeDisabled`
* `toBeEnabled`
* `toBeEmpty`
* `toBeEmptyDOMElement`
* `toBeInTheDocument`
* `toBeInvalid`
* `toBeRequired`
* `toBeValid`
* `toBeVisible`
* `toContainElement`
* `toContainHTML`
* `toHaveAttribute`
* `toHaveClass`
* `toHaveFocus`
* `toHaveFormValues`
* `toHaveStyle`
* `toHaveTextContent`
* `toHaveValue`
* `toHaveDisplayValue`
* `toBeChecked`
* `toBePartiallyChecked`
* `toHaveDescription`

---

## React Testing Library - Fire Event

* `fireEvent` function can be used to simulate interactions of an end user.

* `fireEvent` model user interations with the `page` DOM.

* `fireEvent` takes an `element` and an `event`.

  ```js
  import React from 'react';
  import { render, screen, fireEvent } from '@testing-library/react';
  
  import App from './App';
  
  describe('App', () => {
    test('renders App component', () => {
      render(<App />);
  
      screen.debug();
  
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
  
      screen.debug();
    });
  });
  ```

---

## React Testing Library - User Event

* `userEvent` an extended user event library which builds up on top of the `fireEvent` API.

* The `userEvent` API mimics the actual browser behavior more closely than the `fireEvent` API.

  * e.g. `userEvent.type` triggers a change event, but also `keyDown`, `keyPress`, and `keyUp`.

> Use `userEvent` over `fireEvent` when using React Testing Library

---

## React Testing Library - Callback Handlers

* `Jest` can be used to mock out `callback handlers`:

  ```js
  describe('Search', () => {
    test('calls the onChange callback handler', () => {
      const onChange = jest.fn();
  
      render(
        <Search value="" onChange={onChange}>
          Search:
        </Search>
      );
  
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
  
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
  ```

  ```js
  describe('Search', () => {
    test('calls the onChange callback handler', async () => {
      const onChange = jest.fn();
  
      render(
        <Search value="" onChange={onChange}>
          Search:
        </Search>
      );
  
      await userEvent.type(screen.getByRole('textbox'), 'JavaScript');
  
      expect(onChange).toHaveBeenCalledTimes(10);
    });
  });
  ```


  ---

  ## React Testing Library - Asynchronou / Async

  * __Example Component__

    ```js
    import React from 'react';
    import axios from 'axios';
    
    const URL = 'http://hn.algolia.com/api/v1/search';
    
    function App() {
      const [stories, setStories] = React.useState([]);
      const [error, setError] = React.useState(null);
    
      async function handleFetch(event) {
        let result;
    
        try {
          result = await axios.get(`${URL}?query=React`);
    
          setStories(result.data.hits);
        } catch (error) {
          setError(error);
        }
      }
    
      return (
        <div>
          <button type="button" onClick={handleFetch}>
            Fetch Stories
          </button>
    
          {error && <span>Something went wrong ...</span>}
    
          <ul>
            {stories.map((story) => (
              <li key={story.objectID}>
                <a href={story.url}>{story.title}</a>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  
  export default App;
  ```

  * __Aync Success Test__

    ```js
    import React from 'react';
    import axios from 'axios';
    import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    
    import App from './App';
    
    jest.mock('axios');
    
    describe('App', () => {
      test('fetches stories from an API and displays them', async () => {
        const stories = [
          { objectID: '1', title: 'Hello' },
          { objectID: '2', title: 'React' },
        ];
    
        axios.get.mockImplementationOnce(() =>
          Promise.resolve({ data: { hits: stories } })
        );
    
        render(<App />);
    
        await userEvent.click(screen.getByRole('button'));
    
        const items = await screen.findAllByRole('listitem');
    
        expect(items).toHaveLength(2);
      });

    test('fetches stories from an API and displays them (with 'act')', async () => {
      const stories = [
        { objectID: '1', title: 'Hello' },
        { objectID: '2', title: 'React' },
      ];
  
      const promise = Promise.resolve({ data: { hits: stories } });
  
      axios.get.mockImplementationOnce(() => promise);
  
      render(<App />);
  
      await userEvent.click(screen.getByRole('button'));
  
      await act(() => promise);
  
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });

      test('fetches stories from an API and fails', async () => {
        axios.get.mockImplementationOnce(() =>
          Promise.reject(new Error())
        );
    
        render(<App />);
    
        await userEvent.click(screen.getByRole('button'));
    
        const message = await screen.findByText(/Something went wrong/);
    
        expect(message).toBeInTheDocument();
      });
    });
    ```

---

## References

* [React Testing Library - GitHub](https://github.com/testing-library/react-testing-library)

* [React Testing Library  - Tutorial](https://www.robinwieruch.de/react-testing-library)

* [ARIA Label Attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)

* [ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)


