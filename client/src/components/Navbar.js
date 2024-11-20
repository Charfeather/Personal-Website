import { Link } from "react-router-dom"
import { useState } from "react"

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
    .then(function(response)
    {
    return response.json
    })
    .then(function(data){
        const array=data.message
        console.log(array)
    })


function Navbar(){
    return(
        <div className="nav_menu">
            <div className="name_content">
                <div>Charles Featherstone</div>
                </div>
            <div className="nav_menu_content">
                <Link to="/message-list">About</Link>
                <Link to="/search">Projects</Link>
                <Link to="/my-profile">Contact</Link>
                <a href="/">Home</a>
            </div>
        </div>
    )
}
export default Navbar