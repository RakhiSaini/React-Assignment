import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OtpInput from './component/OtpInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>OTP Input Component</h1>
      <OtpInput />
    </div>
    </>
  )
}

export default App
