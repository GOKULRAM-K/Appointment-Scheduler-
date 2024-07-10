import React, { useState, useEffect } from "react";
import "./App.css";
import AppointmentForm from "./AppointmentForm";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Appointment Scheduler</h1>
        <p>Current Time: {currentTime.toLocaleTimeString()}</p>
      </header>
      <main>
        <AppointmentForm />
      </main>
    </div>
  );
}

export default App;
