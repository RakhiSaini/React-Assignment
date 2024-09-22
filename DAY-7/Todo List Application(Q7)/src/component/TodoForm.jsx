import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState(''); // State for input value

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (inputValue.trim()) {
      addTodo(inputValue); // Call addTodo function
      setInputValue(''); // Clear input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} // Update input value
        placeholder="Add a new todo" 
      />
      <button type="submit">Add Todo</button> {/* Submit button */}
    </form>
  );
};

export default TodoForm;
