import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import {NewsProvider} from "./news/NewsProvider"
import {NewsForm} from "./news/NewsForm"
import {NewsArticleList} from "./news/NewsArticleList"
import {NewsDetail} from "./news/NewsDetail"
import { UserProvider} from "./user/userProvider"



export const ApplicationViews = () => {
  return (
    <>

<Route exact path="/">
        <Home />
      </Route>

    <NewsProvider>
        <UserProvider>
     
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


   
  </UserProvider>
    </NewsProvider>
  

      <Route path="/friends">
        
      </Route>
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
