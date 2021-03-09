import React from "react";
import { Link } from "react-router-dom"
import "./Message.css";

export const MessageCard = ({ message }) => (
<div className="message">
    <div className="message__head">{message.user.name} - {message.timestamp}</div>
    <div className="message__text">
        { message.text }
    </div>
</div>
);
