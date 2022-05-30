import React, { useState } from 'react'
import imageUrl from './ac.jpg';
import './posts.css'
import Comment from "./Comment"



class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            id: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ message: event.target.value });
        this.setState({ id: event.target.id });
    }
    handleSubmit(event) {
        
        const payload = {
            _id: this.state.id,
            comment: this.state.message
        };
        fetch("http://localhost:3001/addcomment", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            });
    }







    render() {
        return (
            <div className="img-with-text">
                <form onSubmit={this.handleSubmit}>
                    <div className="title">
                        <p>{this.props.info.Title}</p>
                    </div>
                    <img src={this.props.info.imageUrl} alt="sometext" />

                    {this.props.info.comments.map((val) => {
                        return (
                            <Comment info={val}></Comment>
                        )
                    })}
                    <br></br>
                    <div className="comment">
                        <input type="text" value={this.state.message} id={this.props.info._id} onChange={this.handleChange} placeholder="Comment here"></input>
                        <button type="submit" id="postbutton" >Comment</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Posts;




