import React, { useContext, useEffect, useState } from "react";
import { MessageContext } from "../message/MessageProvider";
import "./Message.css";
import { useHistory } from "react-router-dom";

export const MessageForm = () => {
    const { addMessage } = useContext(MessageContext);

    const [message, setMessage] = useState({
        userId: sessionStorage.getItem("nutshell_user"),
        text: "",
        timestamp: Math.floor(Date.now() /1000)
    });

    const history = useHistory();

    useEffect(() => {
    }, []);

    const handleControlledInputChange = (event) => {
        
        const newMessage = { ...message };
        let selectedVal = event.target.value;

        // if (event.target.id.includes("Id")) {
        //     selectedVal = parseInt(selectedVal);
        // }
        
        newMessage[event.target.id] = selectedVal;
        setMessage(newMessage);
    };

const handleClickSaveMessage = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const text = message.text;
//    console.log(text);
    if (text === "" ) {
        window.alert("Please enter a message");
    } else {
        console.log("Add Message" + message.timestamp);
        addMessage(message).then(() => history.push("/messages"));
    }
};

    return (
        <form className="messageForm">
            <fieldset>
            <div className="form-group">
                {/* <label htmlFor="text">New Message:</label> */}
                <input
                type="text"
                id="text"
                onChange={handleControlledInputChange}
                className="form-control"
                placeholder="New Message"
                value={message.text}
                />
            </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveMessage}>
            Post
            </button>
        </form>
    );
    };
