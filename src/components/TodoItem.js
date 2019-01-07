import React from "react";

function TodoItem(props) {
  const { id, details, completed } = props.value;

  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChange(id)}
      />
      <span className={completed ? "completed" : ""}> {details} </span>
      <hr />
    </div>
  );
}

export default TodoItem;
