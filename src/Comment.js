import React from 'react'
import './posts.css'

 const Comment = (props) => {
    return (
        <div>
            <div className="comments_div">
                <p>{props.info}</p>
            </div>
        </div>
    )
}

export default Comment;
