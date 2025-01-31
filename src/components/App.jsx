import React, { useState } from "react";
import ToDoItem from "./ToDoItem"; // Import the ToDoItem component

function App() {
  // State management
  const [inputText, setInputText] = useState(""); // Track input field value
  const [items, setItems] = useState([]); // Track list items

  // Event handlers
  const handleChange = (e) => {
    setInputText(e.target.value); // Update input text state
  };

  const addItem = () => {
    if (inputText.trim() !== "") { // Prevent empty items
      setItems((prevItems) => [...prevItems, inputText]); // Add new item
      setInputText(""); // Clear input field
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  // Function to delete an item
  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item, index) => index !== id));
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={inputText} // Controlled input
          onChange={handleChange} // Track typing
          onKeyPress={handleKeyPress} // Add on Enter
          placeholder="Add a new task" // Added placeholder
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              key={index} // Unique key for each item
              id={index} // Pass the index as an ID
              text={item} // Pass the item text
              onDelete={deleteItem} // Pass the delete function
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;