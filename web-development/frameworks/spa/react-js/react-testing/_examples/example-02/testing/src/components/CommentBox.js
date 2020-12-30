import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends React.Component {
  state = { comment: '' };

  handleCommentChange = event => {
    this.setState( { comment: event.target.value } );
  };

  handleOnSubmit = event => {
    // By default when a form submits the browser re-fetched the page,
    // Prevent the browser re-fetching page.
    event.preventDefault();
    
    // Call action creator and save comment.
    this.props.saveComment(this.state.comment);

    this.setState( { comment: ''} );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h4>Add a comment</h4>
          <textarea onChange={this.handleCommentChange} value={this.state.comment} />
          <div>
            <button className="submit-button">Submit</button>
          </div>
        </form>
        <button className="fetch-button" onClick={this.props.fetchComments}>Fetch</button>
      </div>

    );
  }
}

export default connect(null, actions)(CommentBox);
