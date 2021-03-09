import React, { useContext, useEffect, useState } from "react"
import { NewsArticleContext } from "./NewsProvider"
import { NewsArticleCard } from "./NewsCard"
import "./News.css"
import { useHistory } from "react-router-dom"

export const NewsArticleList = () => {
  const { newsArticles, getNewsArticles, searchTerms } = useContext(NewsArticleContext)

  // Since you are no longer ALWAYS displaying all of the newsArticles
  const [ filterednewsArticles, setFiltered ] = useState([])
  const history = useHistory()

  // Empty dependency array - useEffect only runs after first render
  useEffect(() => {
      getNewsArticles()
  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching newsArticles
      const subset = newsArticles.filter(newsArticle => newsArticle.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all newsArticles
      setFiltered(newsArticles)
    }
  }, [searchTerms, newsArticles])

  return (
    <>
      <h1>News Articles</h1>
   
      <button onClick={() => history.push("/articles/create")}>
          New Article
      </button>
      <div className="newsArticles">
      {
        filterednewsArticles.map(newsArticle => {
          return <NewsArticleCard key={newsArticle.id} newsArticle={newsArticle} />
        })
      }
      </div>
    </>
  )
}