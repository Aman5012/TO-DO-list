import React, { useState } from "react"; // Added useState hook

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
      setItems(prevItems => [...prevItems, inputText]); // Add new item
      setInputText(""); // Clear input field
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
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
        <button onClick={addItem}> {/* Added click handler */}
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => ( // Dynamic list rendering
            <li key={index}>{item}</li> // Unique key for each item
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;