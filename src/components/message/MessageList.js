import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { MessageContext } from "./MessageProvider"
import { MessageForm } from "./MessageForm"
import { MessageCard } from "./MessageCard"

import { FriendContext } from "./../friends/FriendProvider"

import "./Message.css"

export const MessageList = () => {
    
    const { messages, getMessages } = useContext(MessageContext)
    const { userFriends, getFriends } = useContext(FriendContext)

    useEffect(() => {
        getFriends()
        .then(getMessages())
    }, [])

    console.log(userFriends);

    const history = useHistory();

    return (
        <div className="message">
            <div>
                <h2>Messages</h2>
            </div>
            <div>
                <MessageForm/>
            </div>

            <div className="messageList">
                {
                messages.map(message => {
                    return <MessageCard key={message.id} message={message} userFriends={userFriends} />
                })
                }
            </div>
        </div>
    )
}

