import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)} style={{margin:'20px'}}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{margin:'20px'}}>Decrement</button>
      <button onClick={() => setCount(0)} style={{margin:'20px'}}>Reset</button>
    </div>
    </>
  )
}

export default App
