import React from "react";

import Modal from "../Modal";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import history from "../../history";
import { deleteStream } from "../../actions";
import { fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    console.log("StreamDelete componentDidMount props: ", this.props);
    this.props.fetchStream(this.props.match.params.id);
  }

  // NB: instead of <React.Fragment> we can also do <>.
  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    } else {
      return `Are you sure you want to delete the stream called '${
        this.props.stream.title
      }'?`;
    }
  }

  render() {
    // if (!this.props.stream) {
    //     return <div>Loading...</div>
    // }
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
