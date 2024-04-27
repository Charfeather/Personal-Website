import { Link } from "react-router-dom"
import { useState } from "react"


function Navbar(){
    return(
        <div>
            <div className="nav_menu">
                <Link to="/message-list">About Me</Link>
                <Link to="/search">Projects</Link>
                <Link to="/my-profile">FAQ</Link>
                <a href="/">Home</a>
            </div>
        </div>
    )
}
export default Navbar