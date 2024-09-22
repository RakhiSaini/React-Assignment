import React from 'react';

const TodoItem = ({ todo, markAsCompleted }) => {
  return (
    <li>
      {todo.text} 
      {!todo.completed && (
        <button onClick={() => markAsCompleted(todo.id)}>Mark as Completed</button> // Button to mark todo
      )}
      {todo.completed && <span> (Completed)</span>} {/* Show if completed */}
    </li>
  );
};

export default TodoItem;
