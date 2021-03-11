import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const NewsArticleContext = createContext()

// This component establishes what data can be used.
export const NewsProvider = (props) => {
  const [newsArticles, setNewsArticles] = useState([])
  const [ searchTerms, setSearchTerms ] = useState("")

  const getNewsArticles = () => {
    return fetch("http://localhost:8088/articles")
      .then(response => response.json())
      .then(newsArticlesData => setNewsArticles(newsArticlesData))
  };

  const addNewsArticle = newsArticle => {
    return fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newsArticle)
    })
    .then(response => response.json())
};

  const getNewsArticleById = (id) => {
    return fetch(`http://localhost:8088/articles/${id}`)
      .then(res => res.json())
};
const releaseNewsArticle = newsArticleId => {
  return fetch(`http://localhost:8088/articles/${newsArticleId}`, {
      method: "DELETE"
  })
      .then(getNewsArticles)
};

const updateNewsArticle = newsArticle => {
  return fetch(`http://localhost:8088/articles/${newsArticle.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newsArticle)
  })
    .then(getNewsArticles)
}

  /*
      You return a context provider which has the
      `newsArticles` state, `getnewsArticles` function,
      and the `addnewsArticle` function as keys. This
      allows any child elements to access them.
  */
  return (
    <NewsArticleContext.Provider value={{
      newsArticles: newsArticles, 
      getNewsArticles: getNewsArticles,
      addNewsArticle: addNewsArticle,
      getNewsArticleById: getNewsArticleById,
      releaseNewsArticle: releaseNewsArticle,
      updateNewsArticle: updateNewsArticle,
      searchTerms: searchTerms,
      setSearchTerms: setSearchTerms
    }}>
      {props.children}
    </NewsArticleContext.Provider>
  )
}
