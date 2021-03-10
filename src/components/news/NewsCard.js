import React, {useState} from "react"
import "../news/News.css"
import { Link, Redirect } from "react-router-dom"


export const NewsArticleCard = ({ newsArticle }) => {
  
    let [timeSaved, setSavedTime] = useState(newsArticle.timestamp)
    let timeHold = newsArticle.timestamp
    console.log(timeHold)
    
    const handleTime = (UNIX_timestamp) => {
      let timeVar = new Date(UNIX_timestamp).toLocaleTimeString("en-US")
        let dateVar = new Date(UNIX_timestamp).toLocaleDateString("en-US")
        const time = ` ${timeVar} ${dateVar}`
         return time;}
    
// console.log(timeHold)
// const date = new Date(timeHold * 1000);
// const hours = date.getHours()-12;
// const minutes = "0" + date.getMinutes();
// const seconds = "0" + date.getSeconds();
// const formatedTime = hours + `:` + minutes.substr(-2) + ':' + seconds.substr(-2);
//       //  setSavedTime(formatedTime)
//       return formatedTime
        
        



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
      <div className="article_time">{handleTime(newsArticle.timestamp)}
</div>
     
      
  </section>
)}