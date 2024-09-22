import React, { createContext, useState } from 'react';

// Create a Context for the Todo
export const TodoContext = createContext();

// Create a Provider component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const markAsCompleted = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: true } : todo
    ));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, markAsCompleted }}>
      {children}
    </TodoContext.Provider>
  );
};
