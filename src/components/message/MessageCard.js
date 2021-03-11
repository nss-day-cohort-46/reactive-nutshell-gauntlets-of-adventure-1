import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { FriendContext } from "./../friends/FriendProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Message.css";

export const MessageCard = ({ message }) => {

    const { deleteMessage } = useContext(MessageContext)
    const { friends, getFriends } = useContext(FriendContext)
    // const { filteredFriends, currentUserFriends } = useContext(FriendContext)
    // const { fiteredFfriends, setFilteredFriends } = useState([])
    const history = useHistory();
    const currentUserId = parseInt(sessionStorage.nutshell_user)
    const [isMyFriend, setIsMyFriend] = useState(false)

    // get all friends
    // find out if message is written by friend
    useEffect(() => {
        getFriends()
        .then(()=> {
            let myFriends = friends.filter(friend => currentUserId===parseInt(friend.currentUserId))
            console.log(myFriends)
            // let filteredFriends = myFriends.map(myFriend => parseInt(myFriend.userId))
            // console.log(filteredFriends)
            // setIsMyFriend(filteredFriends.includes(parseInt(message.userId)))
            // console.log(filteredFriends.includes(message.userId))
            // console.log(message.userId)
            // console.log(isMyFriend)
            // console.log(filteredFriends)

            if (isMyFriend) {
                console.log("YES FRIEND")
            }else{
                console.log("NO FRIEND")
            }
        })
    },[])

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
        <div> <button id={"ADDFRIEND--"+message.id} className="btn btn-primary">Add</button></div>
    </div>
    )
}
