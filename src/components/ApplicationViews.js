import React from "react"
import { Route } from "react-router-dom"
import { AddFriend } from "./friends/FriendAdd"
import { FriendFinder } from "./friends/FriendFinder"
import { FriendList } from "./friends/FriendList"
import { FriendProvider } from "./friends/FriendProvider"
import { UserList } from "./users/UserList"
import { UserContext, UserProvider } from "./users/UserProvider"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <FriendProvider>
        <UserProvider>
          <Route path="/friends">
            {/* Render the component for list of friends */}
            <FriendFinder />
            <UserList />
            <FriendList />
          </Route>
        </UserProvider>
      </FriendProvider>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
