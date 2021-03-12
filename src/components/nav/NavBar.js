import React from "react"
import { Link } from "react-router-dom"
import NutshellLogo from "./../../images/NutshellLogo.png"
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = (props) => {
  return (
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">

      <ul className="nav nav-pills nav-fill">
        <li>
          <Link className="nav-link" to="/"><img src={NutshellLogo} width="100"></img></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/articles">Articles</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/friends">Friends</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/messages">Messages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tasks">Tasks</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/events">Events</Link>
        </li>
      </ul>
    </nav>
  )
}
