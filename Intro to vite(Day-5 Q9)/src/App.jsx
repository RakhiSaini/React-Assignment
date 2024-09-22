import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if(inputValue){
      setTodo([...todo, inputValue]);
      setInputValue('');
    }
  };

  return (
    <>
      <h1>Todo Application</h1>
      <input type="text" value={inputValue} onChange={(e) =>setInputValue(e.target.value)} placeholder='Add new todo' />
      <button onClick={addTodo} style={{padding:'10px', margin:'20px', background:'blue'}}>Add Todo</button>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
  }
export default App
