import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Message.css";

export const MessageCard = ({ message }) => {

    const { deleteMessage } = useContext(MessageContext)
    const history = useHistory();

    function timeConverter(UNIX_timestamp){
        const unixTimestamp = UNIX_timestamp

        const milliseconds = UNIX_timestamp * 1000 // 1575909015000
        
        const dateObject = new Date(milliseconds)
        
        const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
        
        const dayText = dateObject.toLocaleString("en-US", {weekday: "short"}) // Monday
        const month = dateObject.toLocaleString("en-US", {month: "short"}) // December
        const day = dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
        const year = dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019
        const hour = dateObject.toLocaleString("en-US", {hour: "numeric"}) // 10 AM
        const min = dateObject.toLocaleString("en-US", {minute: "numeric"}) // 30
        const sec = dateObject.toLocaleString("en-US", {second: "numeric"}) // 15
        const timeZone = dateObject.toLocaleString("en-US", {timeZoneName: "short"}) // 12/9/2019, 10:30:15 AM CST

        // const time = dayText + " " + month + " " + year + " " + hour + " " + min + " " + sec + " " + timeZone
        const time = timeZone
        return time;
    }

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
        <div className="message__head">{message.user.name} - {timeConverter(message.timestamp)}</div>
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
