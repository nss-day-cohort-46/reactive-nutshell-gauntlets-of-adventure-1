// import React, { useEffect, useContext, useState } from "react"
// import { UserContext } from "../users/UserProvider"
// import { useParams } from "react-router-dom"
// import { FriendContext } from "./FriendProvider"


// export const AddUserAsFriend = () => {

//     const { getUserById } = useContext(UserContext)
//     const { AddFriend, getFriends } = useContext(FriendContext)
    
//     const [user, setUsers] = useState({})

//     const {userId} = useParams()

//     useEffect(() => {
        
//         getUserById(userId)
        
//         .then((res) => {
//             setUsers(res)
//         })
//     }, [])

//     useEffect(() => {
//         getFriends()
//     }, [])
//     const currentUser = sessionStorage.getItem("nutshell_user")
//     const handleSaveFriend = () => {
//         AddFriend({
//             userId: user.id,
//             currentUserId: parseInt(currentUser)
//         })
//     }
//     return handleSaveFriend
// }