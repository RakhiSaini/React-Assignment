// src/TaskManager.js
import React, { useState, useEffect } from 'react';
import { format, parseISO, isBefore } from 'date-fns';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [reminderTime, setReminderTime] = useState(5); // Default to 5 minutes

  useEffect(() => {
    const now = new Date();
    tasks.forEach(task => {
      const reminderDate = new Date(new Date(task.dueDate).getTime() - reminderTime * 60000);
      if (isBefore(now, reminderDate) && isBefore(now, new Date(task.dueDate))) {
        const timeoutId = setTimeout(() => {
          alert(`Reminder: ${task.title} is due soon!`);
        }, reminderDate.getTime() - now.getTime());
        return () => clearTimeout(timeoutId);
      }
    });
  }, [tasks, reminderTime]);

  const addTask = () => {
    if (!title || !dueDate) return;
    setTasks([...tasks, { title, description, dueDate }]);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input
        type="number"
        value={reminderTime}
        onChange={(e) => setReminderTime(e.target.value)}
        placeholder="Reminder Time (minutes)"
      />
      <button onClick={addTask}>Add Task</button>

      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.title}</strong> - {task.description} (Due: {format(parseISO(task.dueDate), 'PPpp')})
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
