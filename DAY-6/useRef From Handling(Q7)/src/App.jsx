import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleValidationForm from './component/ValidationForm'
import BasicForm from './component/BasicForm'
import DynamicForm from './component/DynamicForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Simple Form Handling with useRef</h1>
      <DynamicForm />
      <SimpleValidationForm />
      <BasicForm />
    </div>
    </>
  )
}

export default App
