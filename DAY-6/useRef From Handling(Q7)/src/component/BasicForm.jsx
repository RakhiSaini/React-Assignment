import React, { useRef } from 'react';

const BasicForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log('Submitted:', { name, email });
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Basic Form Submission</h2>
      <input ref={nameRef} type="text" placeholder="Name" required />
      <input ref={emailRef} type="email" placeholder="Email" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicForm;
