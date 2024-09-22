import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FocusableInput from './component/FocusableInput'
import UncontrolledInput from './component/UncontrolledInput'
import ColorChanger from './component/ColorChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>useRef Hook Examples</h1>
      <FocusableInput />
      <UncontrolledInput />
      <ColorChanger />
    </div>
    </>
  )
}

export default App
