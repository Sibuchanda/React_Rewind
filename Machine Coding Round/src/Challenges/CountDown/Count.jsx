import React, { useState, useEffect, useRef } from "react";

export const Count = () => {
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [timeLeft, setTimeLeft] = useState(null); // total seconds
  const [running, setRunning] = useState(false);

  const timerRef = useRef(null);

  // Format time with zero padding
  const formatTime = (t) => t.toString().padStart(2, "0");

  const handleStart = () => {
    const h = parseInt(hour) || 0;
    const m = parseInt(minutes) || 0;
    const s = parseInt(seconds) || 0;
    const total = h * 3600 + m * 60 + s;

    if (total <= 0) {
      alert("Enter valid time!");
      return;
    }

    setTimeLeft(total);
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setTimeLeft(null);
    setHour("");
    setMinutes("");
    setSeconds("");
  };

  // Timer effect
  useEffect(() => {
    if (running && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [running]);

  // When timer hits zero
  useEffect(() => {
    if (timeLeft === 0) {
      setRunning(false);
      if ("Notification" in window) {
        if (Notification.permission === "granted") {
          new Notification("⏰ Time’s up!");
        } else {
          alert("⏰ Time’s up!");
        }
      } else {
        alert("⏰ Time’s up!");
      }
    }
  }, [timeLeft]);

  // Convert timeLeft (seconds) into hh:mm:ss
  const getDisplayTime = () => {
    if (timeLeft == null) return "";
    const h = Math.floor(timeLeft / 3600);
    const m = Math.floor((timeLeft % 3600) / 60);
    const s = timeLeft % 60;
    return `${formatTime(h)}:${formatTime(m)}:${formatTime(s)}`;
  };

  return (
    <div className="min-h-screen bg-amber-100 flex items-center justify-center gap-6">
      {timeLeft === null ? (
        // Show inputs initially
        <div className="flex gap-2 items-center">
          <input
            type="number"
            placeholder="HH"
            aria-label="Hours"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            className="w-16 border border-black p-2 rounded-md text-2xl text-center"
          />
          <span className="font-bold">:</span>
          <input
            type="number"
            placeholder="MM"
            aria-label="Minutes"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            className="w-16 border border-black p-2 rounded-md text-2xl text-center"
          />
          <span className="font-bold">:</span>
          <input
            type="number"
            placeholder="SS"
            aria-label="Seconds"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            className="w-16 border border-black p-2 rounded-md text-2xl text-center"
          />
          <button
            onClick={handleStart}
            className="bg-blue-500 rounded-md p-4 cursor-pointer hover:bg-blue-400 text-white font-bold"
          >
            Start
          </button>
        </div>
      ) : (
        // Show countdown + buttons
        <div className="flex gap-4 items-center">
          <span className="text-4xl font-bold">{getDisplayTime()}</span>
          {running ? (
            <button
              onClick={handlePause}
              className="bg-yellow-500 rounded-md p-4 cursor-pointer hover:bg-yellow-400 text-white font-bold"
            >
              Pause
            </button>
          ) : (
            <button
              onClick={() => setRunning(true)}
              className="bg-blue-500 rounded-md p-4 cursor-pointer hover:bg-blue-400 text-white font-bold"
            >
              Start
            </button>
          )}
          <button
            onClick={handleReset}
            className="bg-green-500 rounded-md p-4 cursor-pointer hover:bg-green-400 text-white font-bold"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};
