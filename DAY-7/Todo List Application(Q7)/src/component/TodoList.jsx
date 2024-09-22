import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, markAsCompleted }) => {
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
