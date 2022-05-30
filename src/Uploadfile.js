import React, { useState } from 'react';
import { storage } from './Firebase';
import './posts.css'

const Uploadfile = () => {
    const [image, setimage] = useState(null);
    const [message, setmessage] = useState('');
    const [imageurl, setimageurl] = useState('');

    const handlechange = event => {
        if (event.target.files[0]) {
            setimage(event.target.files[0]);
            console.log(event.target.files[0]);
        }

        //   console.log(image);
    };

    const handlechangetextarea = event => {
        if (event.target.value) {
            setmessage(event.target.value);
            console.log(message);
        }

        //   console.log(image);
    };

    const handleupload = () => {
        console.log('handle upload called');
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => { console.error(); },
            () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                        setimageurl(url);
                        console.log(imageurl)
                        const payload = {
                            Title: message,
                            userId:"6280739b609a0f5cbcb51d21",
                            tags: ["ram","ram"],
                            imageUrl: url,
                            userId:sessionStorage.getItem('UserId')
                        };
                        fetch("http://localhost:3001/addpost", {
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

                    });
            }

        )
    }


    return (
        <div>
            
                <div className="textarea">
                    <textarea id="textarea" value={message} placeholder="pls enter message here..." onChange={handlechangetextarea} rows="5" cols="70"></textarea>
                    <div> 
                        <input type="file" onChange={handlechange}></input>
                        <button type="submit" onClick={handleupload}>upload</button>
                     </div>
                </div>
            
        </div>
    )
}

export default Uploadfile;
