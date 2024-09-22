import React, { useRef, useState } from 'react';

const SimpleValidationForm = () => {
  const nameRef = useRef(null);
  const [error, setError] = useState('');

  const validateName = () => {
    const value = nameRef.current.value;
    setError(value.length < 3 ? 'Name must be at least 3 characters long' : '');
  };

  return (
    <div>
      <h2>Simple Input Validation</h2>
      <input
        ref={nameRef}
        type="text"
        placeholder="Name"
        onBlur={validateName}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
};

export default SimpleValidationForm;
