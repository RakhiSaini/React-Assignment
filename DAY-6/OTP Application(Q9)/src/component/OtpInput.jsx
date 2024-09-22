import React, { useRef, useState } from 'react';

const OtpInput = () => {
  const [otp, setOtp] = useState(Array(6).fill('')); // 6 input boxes
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pastedValue = e.clipboardData.getData('text');
    if (/^\d{6}$/.test(pastedValue)) {
      const newOtp = pastedValue.split('');
      setOtp(newOtp);
      newOtp.forEach((_, i) => {
        if (inputRefs.current[i]) {
          inputRefs.current[i].value = newOtp[i];
        }
      });
      inputRefs.current[5].focus(); // Focus on the last input
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.every((digit) => digit)) {
      alert(`OTP Entered: ${otp.join('')}`);
      console.log(`OTP Entered: ${otp.join('')}`);
    } else {
      alert('Please fill all the input boxes.');
    }
  };

  return (
    <form onSubmit={handleSubmit} onPaste={handlePaste}>
      <div className="otp-input-container">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            maxLength="1"
            className="otp-input"
            autoFocus={index === 0} // Focus on the first input by default
          />
        ))}
      </div>
      <button type="submit" disabled={!otp.every((digit) => digit)} className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default OtpInput;
