import React from "react";

const ToDoLists = (props) => {
  return (
    <>
      <div className="todo-style">
        <i class="fa fa-times" aria-hidden="true" />
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoLists;
