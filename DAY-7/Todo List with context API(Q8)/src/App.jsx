import React from 'react';
import { TodoProvider } from '../src/component/TodoContext';
import TodoList from '../src/component/TodoList';
import TodoForm from '../src/component/TodoForm';

const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
