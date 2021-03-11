import React from "react"

import { Link } from "react-router-dom"
import "../news/News.css"



export const NewsArticleCard = ({ newsArticle }) => (
   
    <section className="newsArticle"> 
    debugger
        <h3 className="newsArticle__name">
          <Link to={`/articles/detail/${newsArticle.id}`}>
            { newsArticle.title }
          </Link>
        </h3>
        <div className="newsArticle__synopsis">{ newsArticle.synopsis }</div>
    </section>
    
)