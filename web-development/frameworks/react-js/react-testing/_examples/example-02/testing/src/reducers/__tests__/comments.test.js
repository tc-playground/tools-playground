import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT.", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "fake test comment"
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual([action.payload]);
});

it("handles actions with unknown type.", () => {
  const action = {};
  const newState = commentsReducer([], action);
  expect(newState).toEqual([]);
});
