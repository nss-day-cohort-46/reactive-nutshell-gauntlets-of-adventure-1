import React from "react"
import { Link } from "react-router-dom"
import "./Event.css"

export const eventCard = ({ event }) => (
  <section className="event">
  <h3 className="event__name">
      <Link to={`/events/details/${event.id}`}>
      { event.name }
      </Link>
  </h3>
  <div className="event__name">event Name: {event.name}</div>
  <div className="event__eventDetails">event Date: {event.date}</div>
  <div className="event__location">Expected Completion: {event.location}</div>
</section>
)