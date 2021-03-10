import React, { useContext, useEffect, useState } from "react"
import { NewsArticleContext } from "./NewsProvider"
import "../news/News.css"
import { useParams, useHistory } from "react-router-dom"

export const NewsDetail = () => {
  const { getNewsArticleById, releaseNewsArticle } = useContext(NewsArticleContext)

	const [newsArticles, setNewsArticle] = useState({})
    
	const {newsArticleId} = useParams();
  
	const history = useHistory();
    const handleRelease = () => {
        releaseNewsArticle(newsArticles.id)
          .then(() => {
            history.push("/articles")
          })
      }

  useEffect(() => {
     console.log("useEffect", newsArticleId)
   
    getNewsArticleById(newsArticleId)
    .then((response) => {
      setNewsArticle(response)
    })
    }, [])

  return (

    
    <section className="newsArticle">
        
        <h3 className="newsArticle__name">{newsArticles.title}</h3>
      <div className="newsArticle__synopsis">Synopsis: {newsArticles.synopsis}</div>
      <div className="newsArticle__url">Website: {newsArticles.url}</div>
      {/* <div className="newsArticle__timeStamp">Time Posted: {newsArticles.timestamp}</div> */}
      <button onClick={handleRelease}>Delete Article</button>
      <button onClick={() => {
     history.push(`/articles/edit/${newsArticles.id}`)
            }}>Edit</button>
    </section>
  )
}