import React, { useRef } from 'react';

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Current Value: {inputRef.current?.value}</p>
    </div>
  );
};

export default UncontrolledInput;
