import React, { useContext } from "react"
import { AddUserAsFriend } from "../friends/FriendAdd"
import { FriendContext, FriendProvider } from "../friends/FriendProvider"



export const UserCard = ({ user }) => {
    const {addFriend} = useContext(FriendContext)


    const handleSaveFriend = () => {
        const currentUser = sessionStorage.getItem("nutshell_user")
        addFriend({
            userId: user.id,
            currentUserId: parseInt(currentUser)
        })
    }
    
    
    return (
    <section className="user">
        <h3 className="user__name">{user.name}</h3>
        <button onClick={handleSaveFriend} >Add Friend</button>
    </section>
)}