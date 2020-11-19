import React from "react";

import { connect } from "react-redux";

// fetchPosts was the old way of doing this. Left in for reference.
// eslint-disable-next-line
import { fetchPosts, fetchPostsAndUsers } from "../actions";

import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key="post.id">
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.tile}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    console.log("PostList.render()", this.props.posts);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { /* fetchPosts */ fetchPostsAndUsers }
)(PostList);
