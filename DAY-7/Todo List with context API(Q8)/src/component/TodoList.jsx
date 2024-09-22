import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, markAsCompleted } = useContext(TodoContext); // Consume the context

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          markAsCompleted={markAsCompleted} // Pass down the function
        />
      ))}
    </ul>
  );
};

export default TodoList;
