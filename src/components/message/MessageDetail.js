import React, { useContext, useEffect, useState } from "react"
import "./Message.css"
import { useParams, useHistory } from "react-router-dom"
import { MessageContext } from "./MessageProvider"

export const MessageDetail = () => {
    const { getMessageById, releaseMessage } = useContext(MessageContext)

    const [message, setMessage] = useState({})

    const {messageId} = useParams();
    const history = useHistory();

    useEffect(() => {
    console.log("useEffect", messageId)
    getMessageById(messageId)
    .then((response) => {
        console.log(response);
        setMessage(response)
    })
    }, [])

    const handleDelete = () => {
        if (window.confirm("Are you sure?")){
            releaseMessage(message.id)
            .then(() => {
                history.push("/messages")
            })
        }
    }

    return (
        <section className="message">
        <h3 className="message__name">{message?.name}</h3>
        <div className="message__location">{message.text}</div>
        <button onClick={
            handleDelete
            }>Delete</button>
</section>
    )
    }