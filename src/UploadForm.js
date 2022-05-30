import React from 'react'
import './posts.css'


class UploadForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            text: '',
            imageurl: '',
            dp:null
        };
        this.handleChange = this.handleChange.bind(this);  
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.handlefilechange = this.handlefilechange.bind(this);       
    }
    handleChange(event) {
        this.setState({ text: event.target.value });
        console.log(this.state.text);

    }

    handleSubmit(event) {
        event.preventDefault();
        const payload = {
            text: this.state.text,
            imageurl: this.state.imageurl
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

    handlefilechange = e =>{
        console.log(e.target.files[0]);
    }
     

    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
              <div className="textarea">
                  <textarea id="textarea" value={this.state.text} placeholder="pls enter message here..." onChange={this.handleChange} rows="5" cols="70"></textarea>
                  <div>
                            <input type="file" id="myFile" name="filename"></input>
                            <button type="submit" id="postbutton">Post</button>
                        </div>
              </div>
              </form>
            
               
            </div>
        )
    }
}

export default UploadForm;
