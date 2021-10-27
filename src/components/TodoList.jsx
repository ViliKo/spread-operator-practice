import React from "react";

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((x) => {
          return <li>{x}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
