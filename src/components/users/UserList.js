import React, { useContext, useEffect, useState } from "react"
import { UserCard } from "./User"
import { UserContext } from "./UserProvider"

export const UserList = () => {

    const { users, getUsers, searchTerms } = useContext(UserContext)
    const [ filteredUsers, setFiltered ] = useState([])
    
    //import the context object created in the provider component so that 
    // the Context hook can access the objects it exposes.
    // This state changes when `getUsers()` is invoked below
    useEffect(() => {
        getUsers()
    }, [])
    useEffect(() => {
        // console.log("FriendList")
        if (searchTerms !== "") {
            const subset = users.filter(user => user.name.toLowerCase().includes(searchTerms))
            setFiltered(subset)
        } else {
            setFiltered([])
        }

    }, [searchTerms, users])
//   The useEffect hook allows the component to reach out into the world for anything 
//   that cannot be handled during render. In this case, it is the API call for the friends.

    // Use the .map() array method to iterate the array of animals and 
    // generate HTML for each one by invoking the FriendCard component function.
    return (
        <div className="friends">
            {/* {console.log("friends list render", friends)} */}
            
            {   
                filteredUsers.map(user => {
                    return <UserCard key={user.id} user={user} />
                })
            }
        </div>
    )
}