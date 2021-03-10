import React, { useContext } from "react"
import { UserContext } from "../users/UserProvider"


export const FriendFinder = () => {
    const { setSearchTerms } = useContext(UserContext)

    return (
        <>
        Find a Friend:
        <input type="text"
            className="input--wide"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a user" />
        </>
    )
}