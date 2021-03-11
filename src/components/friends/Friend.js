import React, { useContext, useEffect, useState } from "react"
import { FriendContext } from "./FriendProvider"


export const FriendCard = ({ friend }) => {

    const {deleteFriend} = useContext(FriendContext)
    

    const HandleDeleteFriend = () => {

    deleteFriend(friend.id)
}

return (
   
    
    <section className="friend">
        <h3 className="friend__name">{friend.user.name}</h3>
        <button onClick={HandleDeleteFriend}>Delete Friend</button>
    </section>
    
)}