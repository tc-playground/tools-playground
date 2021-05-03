# ReduxForm

## Introduction

* `ReduxForm` - Provides default `react` and `redux` infrastructure when working with `forms`.
    
    * Store to DOM
        * Redux Store  
        * => `ReduxForm mapStateToProps`
        * => Component `ReduxForm props`
        * => DOM `InputElement(value)`

    * DOM to Store
        * DOM `InputElement(onChange)`
        * => Component `ReduxForm handler`
        * => `ReduxForm Action creator`
        * => Redux Store `ReduxFormReducer`

---

## Installation

```
npm install --save redux-form
```

---

## ReduxForm Reducer Configuration

* To add a `ReduxForm` `reducer` to a react app, import the provided `redux-form` `reducer` and include in the `combinedReducers` call:

    ```javascript
    import { combineReducers } from "redux";
    import { reducer as formReducer } from 'redux-form';

    export default combineReducers({
        auth: authReducer,
        form: formReducer
    });
    ```
* NB> e.g. In `<project>/src/reducers/index.js`

---

## ReduxForm Form Configuration

* To add a `reduxForm` and `Fields` to a react app, import the following into a `React component`:

    ```javascript
    import { Field, reduxForm } from "redux-form";
    ```

* `reduxForm` is a `connect` function equivalent and can be used in-place of connect.

    ```javascript
    export default reduxForm({
        form: 'streamCreate'
    })(StreamCreate);
    ```

* `Field` is a `React component`.

    ```javascript
    // formProps is wired in on ReduxForm.Field.
    renderInput(formProps) {
      console.log("StreamCreate.renderInput(formProps) formProps:", formProps);
      return (
        <input onChange={formProps.input.onChange} value={formProps.value}/>
      );
    }

    // Short syntax - De-structure input, and, splat all it's properties.
    //
    // renderInput({ input }) {
    //     return (
    //     <input {...input} />
    //     );
    // }

    render() {
        console.log("StreamCreate this.props: ", this.props);
        return (
        <form className="ui form">
            <Field name="title" component={this.renderInput} />
            <Field name="description" component={this.renderInput} />
        </form>
        );
    }
    ```

    * `name` attribute denotes the __name__ of the underlying `property` us in the redux model.

    * `component` attribute denotes a __function__ that returns the input element to be rendered.
        > NB 1: The input element MUST have an assigned value from props.
        > NB 2: The input elements MUST have a `onChange` callback.

---

## Special Props

* `initialValues` is a special that can be used to initialise a component.
    
    ```javascript
    render() {
        console.log("StreamEdit - props: ", this.props);

        if (!this.props.stream) {
        return <div>Loading...</div>;
        }
        return (
        <div>
            <h3>Edit a Stream</h3>
            <StreamForm 
                initialValues={this.props.stream} 
                onSubmit={this.onSubmit} />
        </div>
        );
    }
    ```

---

## ReduxForm Validation

* A external `validate(formValues)` function can be defined to perform form validation.

* The `formValues` parameter contains the fields on the form.

* The `validate(formValues)` function should return an `errors` object containing each invalid error.

    ```javascript
    const validate = formValues => {
        const errors = {};
        if (!formValues.title) {
            errors.title = "You must enter a title.";
        }
        if (!formValues.description) {
            errors.title = "You must enter a description.";
        }
        return errors;
    }
    ```

* Returning an `empty error` object denotes a valid form.

* A external `validate(formValues)` function needs to be hooked up to the `reduxForm` (`connector`).
    ```javascript
    export default reduxForm({
    form: "streamCreate",
    validate
    })(StreamCreate);
    ```

* Any errors cause the form to be re-rendered and can be displayed.

    ```javascript
    renderInput({ input, label, meta }) {
        return (
        <div className="field">
            <label>{label}</label>
            <input {...input} />
            <div>{meta.error}</div>
        </div>
        );
    }
    ```
* When an error is displayed can be controlled by the the components event status on `meta`
    ```javascript
    renderInput = ({ input, label, meta }) => {
    const className = `field ${(meta.error && meta.touched) ? 'error' : ''}`
    return (
        <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            { this.renderError(meta) }
        </div>
        );
    }

    renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div> 
        </div>
      )
    }
  }
    ```

>NB: Validation function need to execute fast as they are invoke frequently with every element event.



---

## References

* [ReduxForm](https://redux-form.com/8.1.0/)
* [ReduxForm - examples](https://redux-form.com/8.1.0/examples/)