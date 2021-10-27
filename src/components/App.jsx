import React, { useState } from "react";
import Add from "./Add";
import TodoList from "./TodoList";

function App() {
  let [items, setItems] = useState(["hellou boy"]);
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const addToArray = () => {
    setItems((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Add value={inputText} onChange={handleChange} onClick={addToArray} />
      <TodoList items={items} />
    </div>
  );
}

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

export default App;
