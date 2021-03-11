import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Message.css";

export const MessageCard = ({ message, userFriends}) => {

    const { deleteMessage } = useContext(MessageContext)
    // const { filteredFriends, currentUserFriends } = useContext(FriendContext)
    const history = useHistory();
    const currentUserId = parseInt(sessionStorage.getItem('nutshell_user'))

    const timeConverter = (UNIX_timestamp) => {
        var dateVar = new Date(UNIX_timestamp).toLocaleDateString("en-US")
        var timeVar = new Date(UNIX_timestamp).toLocaleTimeString("en-US")
        const time = `${dateVar} ${timeVar}`
        return time;
    }

    const handleDelete = (event) => {
        console.log("Delete ID " + event.target.id)
        deleteMessage(event.target.id)
        .then(() => {
            history.push("/messages")
        })
    }

    let isFriendBoolean = false
    let isFriend = userFriends.filter(userFriend => message.userId === userFriend.userId)
    if (isFriend.length>0) {
        isFriendBoolean = true
    }

    return(
    <div className="messageCard">
    <div className="message__colLeft">
        <div className="message__head">{message.user.id} {message.user.name} - {timeConverter(message.timestamp)}</div>
        <div className="message__text">
            { message.text }
        </div>
    </div>
        <div className="message__colRight">
            { message.userId===parseInt(sessionStorage.getItem("nutshell_user")) ? 
                <button id={message.id} onClick={handleDelete} className="btn btn-primary">X</button>
            : 
                <button className="btn btnHidden btn-primary">X</button> //hidden button for layout
        }
        </div>
        <div className="divider"/>
        <div>
            {
            isFriendBoolean ?
                ""
            :
            <button id={"ADDFRIEND--"+message.id} className="btn btn-primary">Add</button>
            }
        </div>
            
</div>
    )
}
