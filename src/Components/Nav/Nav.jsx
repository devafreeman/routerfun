import React from 'react'
import "./Nav.css"
import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <div id="routeNav">

      <p>Profile</p>
      <p>User</p>

      <Link to="messages" id="mess">Messages</Link>
      <Link to="/" id="home" >Home</Link>
      <Link to="Blog" id="blog">Blog</Link>

    </div>

  )
}

export default Nav