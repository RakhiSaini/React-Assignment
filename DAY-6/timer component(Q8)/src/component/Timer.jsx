import React, { useRef, useState, useEffect } from 'react';

const Timer = () => {
  const [duration, setDuration] = useState(60); // Default duration in seconds
  const [remainingTime, setRemainingTime] = useState(duration);
  const intervalRef = useRef(null);
  const progressBarRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    setRemainingTime(duration);
  }, [duration]);

  const startTimer = () => {
    if (intervalRef.current) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          messageRef.current.textContent = "Time's up!";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRemainingTime(duration);
    messageRef.current.textContent = '';
  };

  const handleInputChange = (e) => {
    const newDuration = e.target.value;
    if (newDuration && !isNaN(newDuration)) {
      setDuration(Number(newDuration));
    }
  };

  useEffect(() => {
    if (progressBarRef.current) {
      const percentage = (remainingTime / duration) * 100;
      progressBarRef.current.style.width = `${percentage}%`;

      // Change background color based on remaining time
      document.body.style.backgroundColor = remainingTime < 10 ? 'red' : '';
    }
  }, [remainingTime, duration]);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1>Timer</h1>
      <input
        type="number"
        value={duration}
        onChange={handleInputChange}
        placeholder="Set duration (seconds)"
        style={{ marginBottom: '10px' }}
      />
      <div style={{ fontSize: '2rem' }}>
        {Math.floor(remainingTime / 60)}:{(remainingTime % 60).toString().padStart(2, '0')}
      </div>
      {/* <div
        ref={progressBarRef}
        style={{
          height: '20px',
          width: '100%',
          backgroundColor: 'green',
          transition: 'width 0.5s',
        }}
      /> */}
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div ref={messageRef} style={{ marginTop: '20px', color: 'blue' }}></div>
    </div>
  );
};

export default Timer;
