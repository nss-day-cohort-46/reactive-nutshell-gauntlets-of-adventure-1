import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { FriendContext } from "../friends/FriendProvider"
// import { UserContext } from "./UserProvider"



export const UserCard = ({ user, userFriends }) => {
    // console.log('userFriends: ', userFriends);
    // console.log('user: ', user);
    const {addFriend} = useContext(FriendContext)
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))


    
    const filterFriends = userFriends.filter(userfriend => userfriend.userId === user.id)
    // console.log('filterFriends: ', filterFriends);
    let showButton = true
    if (filterFriends.length > 0) {
        user.name = ""
        showButton = false
    }
    //if array of filtered friends is greater than 0 then leave whatever returned filtered search as blank.
    if (user.id === currentUser) {
        user.name = ""
        showButton = false
    } 
    const history = useHistory()

    const handleSaveFriend = () => {
            addFriend({
            userId: user.id,
            currentUserId: currentUser
        })
        .then(() => {
            history.push("/friends")
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