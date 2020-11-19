// import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

// Composite Action Creator.
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // 1. Create 'fetchPosts' function.
  // 2. dispatch() to 'redux'. 'redux-thunk' middleware will invoke the function.
  // 3. Halt until the result is achieved.
  console.log("Fetching posts...");
  await dispatch(fetchPosts());
  console.log("Fetched posts: ", getState().posts);

  // 'lodash chained' version below
  //   const userIds = _.uniq(_.map(getState().posts, "userId"));
  //   console.log("Unique userIds: ", userIds);
  //   userIds.forEach(id => dispatch(fetchUser(id)));   // NB: we dont need to wait here are there is no subsequent logic.

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

// Asynchronous Action Creator.

// Short Syntax Version - Define a function that is going to return a function.
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// Long Syntax Version
//
// export const fetchPosts = () => {
//     // async can now be used as we re now returning a function
//     // and redux-thunk can call it to obtain the action object.
//     return async function(dispatch, getState) {
//         const response = await jsonPlaceholder.get("/posts");
//         dispatch({
//           type: "FETCH_POSTS",
//           payload: response
//         });
//     }
// };

// Short Syntax Version
//
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// Memoized Version

// export const fetchUser = (id) => dispatch => {
//     _fetchUser(id, dispatch);
// };

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize( async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
// });
