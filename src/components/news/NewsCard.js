import React from "react"
import "../news/News.css"
import { Link } from "react-router-dom"


export const NewsArticleCard = ({ newsArticle }) => {
  return (
    <section className="newsArticle">
      <h3 className="newsArticle__name">
        <Link to={`/articles/detail/${newsArticle.id}`}>
          { newsArticle.title }
        </Link>
      </h3>
      <div className="newsArticle__synopsis">{ newsArticle.synopsis }</div>
      <div className="newsArticle__url">{ newsArticle.url }</div>
  </section>
)}