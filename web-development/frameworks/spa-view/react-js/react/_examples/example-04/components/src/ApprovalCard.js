import React from "react";

const ApprovalCard = props => {
  // Embedded JSX components can accessed from theprops.
  // console.log(props.children);
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui basic green button">Accept</div>
        <div className="ui basic red button">Reject</div>
      </div>
    </div>
  );
};

export default ApprovalCard;
