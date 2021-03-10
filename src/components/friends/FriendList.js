import React, { useContext, useEffect } from "react"
import { FriendCard } from "./Friend"
import { FriendContext } from "./FriendProvider"

export const FriendList = () => {

    const { userFriends, getFriends, } = useContext(FriendContext)
    
    const currentUser = sessionStorage.getItem("nutshell_userName")
    console.log('currentUser: ', currentUser);
    //import the context object created in the provider component so that 
    // the Context hook can access the objects it exposes.
    // This state changes when `getFriends()` is invoked below
    
    useEffect(() => {
        // console.log("FriendList")
        getFriends()
    }, [])
//   The useEffect hook allows the component to reach out into the world for anything 
//   that cannot be handled during render. In this case, it is the API call for the friends.

    // Use the .map() array method to iterate the array of animals and 
    // generate HTML for each one by invoking the FriendCard component function.
    return (
        <div className="friends">
            {/* {console.log("friends list render", friends)} */}
            <h3>{currentUser}'s Friends</h3>
            {   
                userFriends.map(friend => {
                    return <FriendCard key={friend.id} friend={friend} />
                })
            }
        </div>
    )
}