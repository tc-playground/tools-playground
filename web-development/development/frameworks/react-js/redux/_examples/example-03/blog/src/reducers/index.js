import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
    // Dummy reducer to remove initial errors.
    // dummy: () => { return false; },
    // The 'key' is the name of state variable the result are kept.
    posts: postsReducer,
    users: usersReducer
});