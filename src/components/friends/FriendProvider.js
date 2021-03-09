import React, { useState, createContext } from "react"

export const FriendContext = createContext()
//Nothing is stored in the context when it's defined. At this point, 
//it's just an empty warehouse waiting to be filled.

export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])
    // console.log('friends: ', friends);
    useState() 
    //hook to define a variable that holds the state of the component, 
    //and a function that updates it.
    
    const getFriends = () => {
        return fetch("http://localhost:8088/friends?_expand=user")
        .then(res => res.json())
        .then(setFriends)
    }
    

    return (
        <FriendContext.Provider value={{
            friends, getFriends
        }}>
            {props.children}
        </FriendContext.Provider>
    )
    //You return a context provider which has the `friends` state, `getFriends` function,
    // etc. function as keys. This allows any child elements to access them.
}