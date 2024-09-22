import React, { useEffect, useState } from 'react'

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const timerId = setInterval(() => {
            // setCount(count + 1);    
            setCount(prevCount => prevCount + 1);    
    },1000);

    return () =>{
        clearInterval(timerId);
    };
},[])
  return (
    <div>
      <h1>Timer</h1>
      <p>Timer:{count}</p>
    </div>
  )
}

export default Timer
