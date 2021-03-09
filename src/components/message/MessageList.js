import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { MessageContext } from "./MessageProvider"
import { MessageForm } from "./MessageForm"
import { MessageCard } from "./MessageCard"
import "./Message.css"

export const MessageList = () => {
  // This state changes when `getMessages()` is invoked below
const { messages, getMessages } = useContext(MessageContext)

  //useEffect - reach out to the world for something
useEffect(() => {
    console.log("MessageList: useEffect - getMessages")
    getMessages()
}, [])

const history = useHistory();

return (
    <div>
        <div>
        <h2>Messages</h2>
            <MessageForm/>
        </div>

        <div className="messages">
        {
        messages.map(message => {
            console.log(message);
            return <MessageCard key={message.id} message={message} />
        })
        }
    </div>
    </div>
    )
}

