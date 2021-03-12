import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need event data.
export const EventContext = createContext()

// This component establishes event data that can be used within the application.
export const EventProvider = (props) => {
    const [events, setEvents] = useState([])
    // console.log('events: ', events);

    const getEvents = () => {
        return fetch(`http://localhost:8088/events?userId=${(parseInt(sessionStorage.getItem("nutshell_user")))}&completed=false`)
            .then(res => res.json())
            .then(setEvents)
    }

    const getEventById = (eventId) => {
        // debugger
        return fetch(`http://localhost:8088/events/${eventId}`)
            .then(res => res.json())
    }
// ?userId=${sessionStorage.getItem("nutshell_user")}


    const addEvent = (event) => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(() => getEvents(parseInt(sessionStorage.getItem("nutshell_user"))))
    }

    const deleteEvent = (eventId) => {
        // debugger
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
            .then(() => getEvents(parseInt(sessionStorage.getItem("nutshell_user"))))
    }

    const completeEvent = (eventId) => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                completed: true
            })
        })
            .then(() => getEvents(parseInt(sessionStorage.getItem("nutshell_user"))))
    }

    const updateEvent = (event) => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(() => getEvents(parseInt(sessionStorage.getItem("nutshell_user"))))
    }

    return (
        <EventContext.Provider value={{
            events, getEvents, getEventById, addEvent, deleteEvent, completeEvent, updateEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}