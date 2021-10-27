import React, { useState } from "react";

const Add = (props) => {
  return (
    <div className="form">
      <input type="text" value={props.value} onChange={props.onChange} />
      <button onClick={props.onClick}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default Add;
