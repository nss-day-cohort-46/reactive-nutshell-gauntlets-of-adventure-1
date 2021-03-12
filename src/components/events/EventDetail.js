import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { EventContext } from "./EventProvider";
import "./Event.css"

export const EventDetail = ({event}) => {
  const { completeEvent, deleteEvent, getEventById } = useContext(EventContext)
  const history = useHistory()
  const { eventId } = useParams();

  const handleComplete = () => {
    completeEvent(event.id)
  }
  
  const handleDelete = () => {
    deleteEvent(event.id)
      .then(() => {
        history.push(`/events`)
      })
  }
    
  return (
    <section className="event">
      <h4 className="event__name">event Name: {event.name}</h4>
      <div className="event__date">Expected Date: {event.date}</div>
      <div className="event__location">Details: {event.location}</div>
      

      <button key={event.id} onClick={handleComplete}>Completed event</button>
      <button onClick={() => handleDelete(event.id)}>Delete event</button>
      <button onClick={() => { history.push(`events/edit/${event.id}`) }}>Edit event</button>
    </section>
  )
}