import React, { useContext, useEffect, useState } from "react"

import { FriendContext } from "../friends/FriendProvider"
import { UserContext } from "./UserProvider"



export const UserCard = ({ user }) => {
    const {addFriend} = useContext(FriendContext)
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
    const [isLoading, setIsLoading] = useState(true)
    const {getUsers} = useContext(UserContext)
    // const { userFriends, getFriends } = useContext(FriendContext)
    // console.log('friend: ', userFriends);
    
    
    // useEffect(() => {
    //     // console.log("FriendList")
    //     if (user.id !== currentUser) {
    //         user.name = ""
    //         setIsLoading(false)
    //     } 
    //     getUsers().then(() => {
    //     })
    // }, [])
    
    
    if (user.id === currentUser) {
        user.name = ""
    }

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
            
        { user.id === currentUser ? "" :
                <button id={user.id} onClick={handleSaveFriend} >Add Friend</button>
            }
            
</div>
    </section>
)}