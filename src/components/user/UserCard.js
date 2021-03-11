import React from "react"
import "./user.css"

export const userCard = ({userProps}) => (
    
    <section className="user">
        {/* {console.log(userProps)} */}
        <h3 className ="user__name">Name: {userProps.name}</h3>
        <div className="user__email">Email: {userProps.email}</div>
    </section>
   
)