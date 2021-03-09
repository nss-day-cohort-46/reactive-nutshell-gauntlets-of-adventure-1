import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const MessageContext = createContext()

// This component establishes what data can be used.
export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])

    const getMessages = () => {
        return fetch("http://localhost:8088/messages?_expand=location")
        .then(res => res.json())
        .then(setMessages)
    }

    const getMessageById = (id) => {
        return fetch(`http://localhost:8088/messages/${id}?_expand=location`)
            .then(res => res.json())
    }

    const addMessage = messageObj => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        })
        .then(getMessages)
    }

    const deleteMessage = messageId => {
        return fetch(`http://localhost:8088/messages/${messageId}`, {
            method: "DELETE"
        })
            .then(getMessages)
    }
    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <MessageContext.Provider value={{
            messages, getMessages, getMessageById, addMessage, deleteMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )
}
