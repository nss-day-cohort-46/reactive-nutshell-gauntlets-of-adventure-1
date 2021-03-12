import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider"
import { EventDetail } from "./EventDetail"

export const EventList = () => {
    const history = useHistory()
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <>
            <header className="events__header">
                <h2>Events:</h2>
            </header>
            <section className="events__addeventButton">   
                <button onClick={() => history.push("/events/create")}>Create New event</button>
            </section>
            <div className="events">
                {events?.map(event => <EventDetail key={event.id} event={event} />)}
            </div>
        </>
    )
}