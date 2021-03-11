import React from "react"
import { Route } from "react-router-dom"
import { MessageList } from "./message/MessageList"
import { MessageProvider } from "./message/MessageProvider"
import { TaskProvider } from "./tasks/TaskProvider"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/TaskForm"
import { TaskDetail } from "./tasks/TaskDetail"
import { AddFriend } from "./friends/FriendAdd"
import { FriendFinder } from "./friends/FriendFinder"
import { FriendList } from "./friends/FriendList"
import { FriendProvider } from "./friends/FriendProvider"
import { UserList } from "./users/UserList"
import { UserContext, UserProvider } from "./users/UserProvider"
import { Home } from "./Home"
import {NewsProvider} from "./news/NewsProvider"
import {NewsForm} from "./news/NewsForm"
import {NewsArticleList} from "./news/NewsArticleList"
import {NewsDetail} from "./news/NewsDetail"
import {UserStoredProvider} from "./user/userProvider"

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>


<Route exact path="/">
        <Home />
      </Route>

    <NewsProvider>
        <UserStoredProvider>
     
      <Route path="/articles/create">
        <NewsForm />
      </Route>

<Route exact path="/articles">
    <NewsArticleList />
   </Route>

      <Route exact path="/articles/detail/:newsArticleId(\d+)">
    <NewsDetail />
</Route>

    <Route path="/articles/edit/:newsArticleId(\d+)">
    <NewsForm />
    </Route>


   
  </UserStoredProvider>
    </NewsProvider>
  

      <Route path="/friends">
        
      </Route>

    <MessageProvider>
      <FriendProvider>
        <UserProvider>
          <Route exact path="/friends">
            {/* Render the component for list of friends */}
            <FriendList />
          </Route>
          <Route exact path="/friends/search">
            <FriendFinder />
            <UserList />
          </Route>
        </UserProvider>
      </FriendProvider>
      <Route path="/messages">
        <MessageList />git fetch -a
      </Route>
    </MessageProvider>

      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>

      <TaskProvider>
        <Route exact path="/tasks">
          <TaskList />
        </Route>
        <Route exact path="/tasks/create">
          <TaskForm />
        </Route>
        <Route path="/tasks/details/:taskId(\d+)">
          <TaskDetail />
        </Route>
        <Route path="/tasks/edit/:taskId(\d+)">
          <TaskForm />
        </Route>
      </TaskProvider>

      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>

    </>
  )
}
