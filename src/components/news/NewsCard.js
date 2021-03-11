import React, {useState} from "react"
import "../news/News.css"
import { Link, Redirect } from "react-router-dom"


export const NewsArticleCard = ({ newsArticle }) => {
  
    let [timeSaved, setSavedTime] = useState(newsArticle.timestamp)
    let timeHold = newsArticle.timestamp
    
    
    const handleTime = (UNIX_timestamp) => {
      let timeVar = new Date(UNIX_timestamp).toLocaleTimeString("en-US")
        let dateVar = new Date(UNIX_timestamp).toLocaleDateString("en-US")
        const time = ` ${timeVar} ${dateVar}`
         return time;}
 
  return (
    <section className="newsArticle">
      <h3 className="newsArticle__name">
        <Link to={`/articles/detail/${newsArticle.id}`}>
          { newsArticle.title }
        </Link>
      </h3>
      <Link to={`${ newsArticle.url }`}>
          { newsArticle.url }
      </Link>
      <div className="article_synopsis">Synopsis: {newsArticle.synopsis}</div>
      <div className="article_time">Time Posted: {handleTime(newsArticle.timestamp)}
</div>

     
      
  </section>
)}