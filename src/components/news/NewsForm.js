import React, { useContext, useEffect, useState } from "react"
import { NewsArticleContext } from "../news/NewsProvider"
import { UserContext } from "../user/userProvider"
import "../news/News.css"
import { useHistory, useParams } from 'react-router-dom';

export const NewsForm = () => {
    const { addNewsArticle, getNewsArticleById, updateNewsArticle, getNewsArticles } = useContext(NewsArticleContext)
    const { users, getUsers } = useContext(UserContext)

    //for edit, hold on to state of newsArticle in this view
    const [newsArticle, setNewsArticle] = useState({
      title: "",
      synopsis: "",
      url: "",
      timestamp: "",
      userId:  parseInt(sessionStorage.getItem("nutshell_user"))
    })
    
    //wait for data before button is active. Look at the button to see how it's setting itself to disabled or not based on this state
    const [isLoading, setIsLoading] = useState(true);

    // Now that the form can be used for editing as well as adding an newsArticle, you need access to the newsArticle id for fetching the newsArticle you want to edit
    const { newsArticleId } = useParams();
	  const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newArticleData = { ...newsArticle }
      //newsArticle is an object with properties.
      //set the property to the new value
      newArticleData[event.target.id] = event.target.value
      //update state
      setNewsArticle(newArticleData)
    }

    const handleSavenewsArticle = () => {
      if (parseInt(newsArticle.id) === 0) {
          window.alert("Please select an article to read")
      } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        // This is how we check for whether the form is being used for editing or creating. If the URL that got us here has an id number in it, we know we want to update an existing record of an newsArticle
        if (newsArticleId){
          //PUT - update
          updateNewsArticle({
              id: newsArticle.id,
              title: newsArticle.title,
              synopsis: newsArticle.synopsis,
              url: newsArticle.url,
              timestamp: newsArticle.timestamp,
              userId: parseInt(newsArticle.userId)
          })
          .then(() => history.push(`/articles/detail/${newsArticle.id}`))
        }else {
          //POST - add
          addNewsArticle({
            title: newsArticle.title,
            synopsis: newsArticle.synopsis,
            url: newsArticle.url,
            timestamp: Date.now (),
            userId: parseInt(newsArticle.userId)
          })
          .then(() => history.push("/articles"))
        }
      }
    }

    // Get users and locations. If newsArticleId is in the URL, getnewsArticleById
    useEffect(() => {
      getUsers().then(getNewsArticles).then(() => {
        if (newsArticleId) {
          getNewsArticleById(newsArticleId)
          .then(newsArticle => {
              setNewsArticle(newsArticle)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    return (
      <form className="newsArticleForm">
        <h2 className="newsArticleForm__title">{newsArticleId ? "Edit News Article" : "Add News Article"}</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="newsArticleName">Article Title: </label>
            <input type="text" id="title" required autoFocus className="form-control"
            placeholder="Article title"
            onChange={handleControlledInputChange}
            value={newsArticle.title}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
              <label htmlFor="synopsis">Article's Synopsis:</label>
              <input type="text" id="synopsis" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Article synopsis" value={newsArticle.synopsis}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
              <label htmlFor="url">Article's Url:</label>
              <input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Articles url" value={newsArticle.url}/>
              
          </div>
        </fieldset>
       
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSavenewsArticle()
          }}>
        {newsArticleId ? "Save Article" : "Add Article"}</button>
      </form>
    )
}