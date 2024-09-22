import React, { useRef } from 'react';

const ColorChanger = () => {
  const boxRef = useRef(null);

  const changeColor = () => {
    boxRef.current.style.backgroundColor = 
      boxRef.current.style.backgroundColor === 'blue' ? 'green' : 'blue';
  };

  return (
    <div>
      <div
        ref={boxRef}
        onClick={changeColor}
        style={{margin:'auto', width: '100px', height: '100px', backgroundColor: 'blue', cursor: 'pointer' }}
      ></div>
      <p>Click the box to change its color!</p>
    </div>
  );
};

export default ColorChanger;
