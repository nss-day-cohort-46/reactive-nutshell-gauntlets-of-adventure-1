import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Message.css";

export const MessageCard = ({ message }) => {

    const { deleteMessage } = useContext(MessageContext)
    const history = useHistory();

    const handleDelete = (event) => {
        console.log("Delete ID " + event.target.id)
        deleteMessage(event.target.id)
        .then(() => {
            history.push("/messages")
        })
    }

    return(
    <div className="messageCard">
    <div>
        <div className="message__head">{message.user.name} - {message.timestamp}</div>
        <div className="message__text">
            { message.text }
        </div>
    </div>
        <div className="message__delete">
            { message.userId===parseInt(sessionStorage.getItem("nutshell_user")) ? 
                <button id={message.id} onClick={handleDelete} className="btn btn-primary">X</button>
            : ""}
        </div>
    </div>
    )
};
