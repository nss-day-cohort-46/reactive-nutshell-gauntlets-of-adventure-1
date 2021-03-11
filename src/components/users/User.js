import React, { useContext, useEffect, useState } from "react"

import { FriendContext } from "../friends/FriendProvider"
// import { UserContext } from "./UserProvider"



export const UserCard = ({ user, userFriends }) => {
    // console.log('userFriends: ', userFriends);
    // console.log('user: ', user);
    const {addFriend} = useContext(FriendContext)
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))


    
    const filterFriends = userFriends.filter(userfriend => userfriend.userId === user.id)
    console.log('filterFriends: ', filterFriends);
    let showButton = true
    if (filterFriends.length > 0) {
        user.name = ""
        showButton = false
    }
    if (user.id === currentUser) {
        user.name = ""
        showButton = false
    } 
    // else if (friendObj) {
    //     user.name = ""
    // }
    // if (user.id === userFriends.userId) {
    //     user.name = ""
    // }

    const handleSaveFriend = () => {
            addFriend({
            userId: user.id,
            currentUserId: currentUser
        })
        
    
    }

    // this event handler tells the button below that if clicked to add the friend to the 
    // array of friends as an object with the defined key variables above.
    
    return (
    <section className="user">
        
            <h3 className="user__name">{user.name}</h3>
            
        <div className="add__friend">
            
        { showButton === false ? "" :
                <button id={user.id} onClick={handleSaveFriend} >Add Friend</button>
            }
            
</div>
    </section>
)}