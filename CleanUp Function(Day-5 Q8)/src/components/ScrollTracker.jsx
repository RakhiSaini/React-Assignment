import React, { useEffect, useState } from 'react'

function ScrollTracker() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(()=>{
        const handleScroll = () => {
            setScrollPosition(window.scrollPosition);
            };
            window.addEventListener('scroll', handleScroll);

        return () =>{
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);

  return (
    <div>
      <h1>scroll  tracker</h1>
    <p>Scroll Position: {scrollPosition}</p>
    </div>
  )
}

export default ScrollTracker

