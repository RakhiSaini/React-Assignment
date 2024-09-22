import React, { useRef } from 'react';

const DynamicForm = () => {
  const inputRefs = useRef([]);

  const handleFocus = (index) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index].focus();
    }
  };

  return (
    <div>
      <h2>Dynamic Form Input Focus</h2>
      {[...Array(5)].map((_, index) => (
        <div key={index}>
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            placeholder={`Input ${index + 1}`}
            onFocus={() => handleFocus(index)}
          />
          <button onClick={() => handleFocus(index)}>Focus Input {index + 1}</button>
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;
