import React from "react";
import ReactDOM from "react-dom";

import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  const tim = faker.image.avatar();
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Tim"
        avatar={tim}
        date="Today at 6:00 PM"
        msg="Pancakes!"
      />
      <CommentDetail
        author="Nu"
        avatar={faker.image.avatar()}
        date="Today at 7:00 PM"
        msg="Nice post!"
      />
      <ApprovalCard>
        <CommentDetail
          author="Tim"
          avatar={tim}
          date="Today at 8:00 PM"
          msg="Obvs..."
        />
      </ApprovalCard>
      <ApprovalCard>That would be mean...</ApprovalCard>
      <ApprovalCard><h4>Really mean!</h4></ApprovalCard>
    </div>

  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
