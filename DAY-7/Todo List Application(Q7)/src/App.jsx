import React, { useState } from 'react';
import TodoList from '../src/component/TodoList';
import TodoForm from '../src/component/TodoForm';

const App = () => {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]); // Update todos state
  };

  // Function to mark a todo as completed
  const markAsCompleted = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: true } : todo // Update the specific todo
    ));
  };

  return (
    <div style={{alignItems:"center"}}>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} /> {/* Pass addTodo function to TodoForm */}
      <TodoList todos={todos} markAsCompleted={markAsCompleted} /> {/* Pass todos and function to TodoList */}
    </div>
  );
};

export default App;
