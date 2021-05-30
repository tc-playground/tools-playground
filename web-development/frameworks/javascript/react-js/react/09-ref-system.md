# React `ref` system

- `ref` is a react sub-system that helps interacting with the `DOM`. Traditional vanilla JavaScripts (e.g. `document.querySelector('img').clientHeight` are not required.

- The system is required as the virtual DOM uses virtual Tags. `It allows us to get a reference on a DOM element that is created from a virtual jsx tag.

- `refs` give access to a single `DOM element`

- `refs` are :

  1. Created in the `constructor`.

  2. Assigned to instance variables.

  3. Passed to a particular `jsx` elements as `props`.

  **Example**:

  ```javascript
    class ImageCard extends React.Component {
    state = { spans: 0 };

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);
        this.setState( { spans } );
    };

    render() {
        const { description, urls } = this.props.image;
        return (
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
            <img ref={this.imageRef} alt={description} src={urls.regular} />
        </div>
        );
    }
    }
  ```
