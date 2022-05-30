import React from 'react'
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="mainsidebar">
            <div className="left">
                <ul>
                    <div>
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                    </div>
                    <div>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                    </div>
                    <div>
                        <li>
                            <Link to="/Home">Post</Link>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="middle"></div>
            <div className="middle"></div>
        </div>
    )
}

export default Sidebar;
