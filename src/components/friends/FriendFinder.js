import React, { useContext } from "react"
import { UserContext } from "../users/UserProvider"
import {Link} from "react-router-dom"


export const FriendFinder = () => {
    const { setSearchTerms } = useContext(UserContext)

    return (
        <>
        <Link to={`/friends/search/`}>
        <button>Find a Friend</button>
        </Link>
        <input type="text"
            className="input--wide"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a user" />
        </>
    )
}