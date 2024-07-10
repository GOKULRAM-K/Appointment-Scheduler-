import React, { useState } from "react";

const AppointmentForm = () => {
  const [appointmentTime, setAppointmentTime] = useState("");
  const [message, setMessage] = useState("");

  const handleScheduleAppointment = (event) => {
    event.preventDefault();
    // Implement logic to schedule appointment
    setMessage(`Appointment scheduled for ${appointmentTime}`);
    setAppointmentTime("");
  };

  return (
    <div className="appointment-form">
      <h2>Schedule Appointment</h2>
      <form onSubmit={handleScheduleAppointment}>
        <label>
          Select appointment time:
          <input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </label>
        <button type="submit">Schedule</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AppointmentForm;
