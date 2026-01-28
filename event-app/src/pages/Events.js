import React, { useState } from "react";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Music Festival",
      date: "10 Feb 2026",
      location: "Chennai",
      description: "Enjoy live music from top artists."
    },
    {
      id: 2,
      title: "Tech Conference",
      date: "18 Feb 2026",
      location: "Bangalore",
      description: "Tech talks, workshops and networking."
    },
    {
      id: 3,
      title: "Art Exhibition",
      date: "25 Feb 2026",
      location: "Mumbai",
      description: "Modern art from upcoming artists."
    }
  ]);

  const handleRegister = (id) => {
    setEvents(events.map(event =>
      event.id === id ? { ...event, registered: true } : event
    ));
  };

  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      <h1 className="events-title">
  🎉 Event Management
        </h1>


      <div className="events-grid">
        {events.map(event => (
          <div className="event-card" key={event.id}>
            <h2>{event.title}</h2>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p className="desc">{event.description}</p>

            {event.registered ? (
              <button className="registered-btn" disabled>
                Registered
              </button>
            ) : (
              <button
                className="register-btn"
                onClick={() => handleRegister(event.id)}
              >
                Register
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
