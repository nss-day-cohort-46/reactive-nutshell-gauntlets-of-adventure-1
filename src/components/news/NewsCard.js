import React, {useState} from "react"
import "../news/News.css"
import { Link } from "react-router-dom"


export const NewsArticleCard = ({ newsArticle }) => {
    let [timeSaved, setSavedTime] = useState(newsArticle.timestamp)

    const handleTime = () => {
        
let timePosted = newsArticle.timestamp;
const date = new Date(timePosted * 1000);
const hours = date.getHours();
const minutes = "0" + date.getMinutes();
const seconds = "0" + date.getSeconds();
const formatedTime = hours + `:` + minutes.substr(-2) + ':' + seconds.substr(-2);
        setSavedTime(formatedTime)
        
}
  return (
    <section className="newsArticle">
      <h3 className="newsArticle__name">
        <Link to={`/articles/detail/${newsArticle.id}`}>
          { newsArticle.title }
        </Link>
      </h3>
      <div className="newsArticle__synopsis">{ newsArticle.synopsis }</div>
      <div className="newsArticle__url">{ newsArticle.url }</div>
      <Link to={`${ newsArticle.url }`}></Link>
      <div className="newsArticle__">{timeSaved}</div>
      <button onClick={(handleTime)}>Click Me</button>
  </section>
)}