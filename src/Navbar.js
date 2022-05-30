import React from 'react';
import "./Navbar.css";
import imageUrl from './ac.jpg';


export const Navbar = () => {
    return (
        <div className="mainnavnar">
            <div className="topnav">
            {/* <img src="./logo.svg" alt="userpic" width="50px" height="50px"></img> */}
                <a className="active" href="/home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <input type="text" placeholder="Search here"></input>
                <img src={imageUrl} alt="userpic" width="25px" height="25px" id="userimg"></img>
            </div>
        </div>
    )
}

export default Navbar;
