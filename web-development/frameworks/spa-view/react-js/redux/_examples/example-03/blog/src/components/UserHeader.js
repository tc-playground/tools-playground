import React from "react";
import { connect } from "react-redux";

// NB: No longer used as users are fetched in composite action creator.
// import { fetchUser } from "../actions";

class UserHeader extends React.Component {

  // NB: No longer used as users are fetched in composite action creator.
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

// NB: 'ownProps' are the props being passed into the component.
const mapStateToProps = (state, ownProps) => {
  // NB: Better top find the required user here than
  //     pass all users into the component and find it
  //     during rendering.
  const user = state.users.find(user => {
    return user.id === ownProps.userId;
  });
  return { user };
};

export default connect(
  mapStateToProps
  // NB: No longer used as users are fetched in composite action creator.
  // { fetchUser }
)(UserHeader);
