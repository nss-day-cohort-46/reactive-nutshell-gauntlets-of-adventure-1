import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { MessageContext } from "./MessageProvider"
import { MessageForm } from "./MessageForm"
import { MessageCard } from "./MessageCard"
import "./Message.css"

export const MessageList = () => {
    
    const { messages, getMessages } = useContext(MessageContext)

    useEffect(() => {
        getMessages()
    }, [])

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
                    // console.log(message);
                    return <MessageCard key={message.id} message={message} />
                })
                }
            </div>
        </div>
    )
}

