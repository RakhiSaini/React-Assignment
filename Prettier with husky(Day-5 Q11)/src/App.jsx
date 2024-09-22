import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataFetching from './components/DataFetching'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DataFetching/>
    </>
  )
}

export default App


// 1) npm install --save-dev prettier
// 2) npm i prettier 
// 3)  npm i husky  