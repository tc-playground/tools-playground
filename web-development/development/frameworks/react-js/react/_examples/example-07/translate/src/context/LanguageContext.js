import React from 'react';


// NB: Must be capital 'C' context.
//     Components must begin with Capital. React think lowercase are standard HTML elements.
const Context = React.createContext('english');

export class LanguageStore extends React.Component {

    state = { language: "english" };

    onLanguageChange = (language ) => {
        this.setState({ language });
    };

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        )
    }

}

export default Context;