import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import { EventContext } from "./EventProvider"

export const EventForm = () => {
    const { addEvent, getEvents, getEventById, deleteEvent, updateEvent } = useContext(EventContext)
    const {getUsers} = useContext(UserContext)
    const history = useHistory()
    const { eventId } = useParams()
    console.log('eventId: ', eventId);

    const [isLoading, setIsLoading] = useState(true)

    const [event, setEvent] = useState({
        userId: parseInt(sessionStorage.getItem("nutshell_user")),
        name: "",
        date: "",
        location: ""

    })

    const handleInputChange = (event) => {
        const newEvent = { ...event }
        newEvent[event.target.id] = event.target.value
        setEvent(newEvent)
    }
    const saveEvent = () => {
        // debugger
        if (eventId) {
            updateEvent({
                id: eventId,
                name: event.name,
                date: event.date,
                location: event.location,
                userId: event.userId
            })
            .then(history.push("/events"))
            // .then(history.push(`/Events/details/${Event.id}`))
        } else {
            addEvent({
                name: event.name,
                date: event.date,
                location: event.location,
                userId: event.userId
            
        })
        .then(history.push("/events"))
    }
}


    useEffect(() => {
        getUsers().then(getEvents).then(() => {
          if (eventId) {
            getEventById(eventId)
            .then(Event => {
                setEvent(Event)
                setIsLoading(false)
            })
          } else {
            setIsLoading(false)
          }
        })
    }, [])

    return (
        <form className="EventForm">
            <h2 className="EventForm__title">Create New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event Name:</label>
                    <input type="text" id="name" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Event name" value={event.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="EventLocations">Event Location: </label>
                    <textarea type="text" id="EventLocation" onChange={handleInputChange} required className="form-control" placeholder="Event Location" value={event.location} ></textarea>
                </div>
            </fieldset>
            <fieldset>
                <label for="start">Event date:</label>
                <input type="date" id="start" name="event-start" value="2020-01-10" min="2020-01-01" max="2030-12-31"/>
                {/* <div className="form-group">
                    <label htmlFor="date">Expected Date: </label>
                    <input type="date" id="expectedDate" onChange={handleInputChange} required className="form-control" placeholder="Event Date" value={event.date} />
                </div> */}
            </fieldset>
            
            <button type = "submit" disabled={isLoading} className="btn btn-primary"
                onClick={event => {
                    event.preventDefault()
                    saveEvent()
                    
                }}>
                Create Event
          </button>
        </form>
    )
            }