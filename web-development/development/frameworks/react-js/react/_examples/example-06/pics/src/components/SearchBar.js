import React from "react";

class SearchBar extends React.Component {

  state = { term: ''}

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  onInputClick() {
    console.log("Input was clicked.");
  }

  onFormSubmit = event => {
    // Override default element behaviour.
    event.preventDefault();
    
    console.log("SearchBar.onFormSubmit() : ", this.state.term);

    // Invoke callback function passed in from parent.
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label>Image Search</label>
            <input
              type="text"
        
              // NB: Function call syntax.
              // onChange={this.onInputChange}

              // NB: Alternative in-lined syntax.
              // onChange={(e) => console.log(e.target.value)}

              value={ this.state.term }
              onChange={(e) =>  this.setState( { term: e.target.value } )}
              onClick={this.onInputClick}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
