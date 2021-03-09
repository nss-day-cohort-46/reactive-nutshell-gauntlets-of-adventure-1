import React, { useState, createContext, useEffect } from "react"

export const FriendContext = createContext()
//Nothing is stored in the context when it's defined. At this point, 
//it's just an empty warehouse waiting to be filled.

export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])
    // console.log('friends: ', friends);
    const [userFriends, setUserFriends] = useState([])
    //useState hook to define a variable that holds the state of the component, 
    //and a function that updates it.
    
    const getFriends = () => {
        return fetch("http://localhost:8088/friends?_expand=user")
        .then(res => res.json())
        .then(setFriends)
    }
    const currentUserFriends = () =>{
        return friends.filter(friend => friend.currentUserId === parseInt(sessionStorage.nutshell_user))
    }
    useEffect(() => {
        // console.log("FriendList")
        setUserFriends(currentUserFriends())
        
    }, [friends])

    const addFriend = friendObj => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendObj)
        })
        .then(getFriends)
    }
    

    return (
        <FriendContext.Provider value={{
            friends, getFriends, addFriend, userFriends
        }}>
            {props.children}
        </FriendContext.Provider>
    )
    //You return a context provider which has the `friends` state, `getFriends` function,
    // etc. function as keys. This allows any child elements to access them.
}