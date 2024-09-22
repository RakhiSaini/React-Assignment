import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/user">Users</Link>
    </nav>
  )
}

export default Navbar


// NavBar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/login">Login</Link>
//       <Link to="/users">Users</Link>
//     </nav>
//   );
// };

// export default NavBar;
