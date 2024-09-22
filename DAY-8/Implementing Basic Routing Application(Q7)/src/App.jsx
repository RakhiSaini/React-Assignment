import React from 'react';
// import ReactDom from "react-dom"
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {

  return (
    <>
    <Navbar/>
      <BrowserRouter>  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<User />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



// App.js
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Users from './pages/User';
// import NavBar from './component/Navbar';

// const App = () => {
//   return (
//     <div>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/users" element={<Users />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

