import React, { useEffect, useState } from 'react'

function MouseTracker() {
    const [position, setPosition] = useState({x:0, y:0});

    useEffect (() =>{
        const handleMouseMove = (event) =>{
            setPosition({x:event.clientX, y:event.clientY})
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            }
        },[]); // Runs once when the component mounts
  return (
    <div>
      <h1>Mouse Position</h1>
      <p>Mouse X: {position.x}, Mouse Y:{position.y}</p>
    </div>
  )
}

export default MouseTracker

