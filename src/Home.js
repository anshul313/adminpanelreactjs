import React from 'react';
import "./Home.css";
import Navbar from "./Navbar";
import Sidebar from './Sidebar';
import Posts from "./Posts";
import Uploadfile from "./Uploadfile";
// import Uploadfile from "./Uploadfile";
// import imageUrla from './images/a.jpg';
// import imageUrlb from './images/b.jpg';
// import imageUrlc from './images/c.jpg';
// import imageUrld from './images/d.jpg';
// import imageUrle from './images/e.jpg';
// import imageUrlf from './images/f.jpg';

// function ncard(val) {
//   //  console.log(val);
//   return (
//     <Posts info={val}></Posts>
//   )
// }

class Home extends React.Component {
  constructor(props) {
    super(props);
    // const [imgs, setimgs] = useState([]);
    this.state={
      imgs:[]
    }
    
    // console.log('homepage data');
    // console.log(sessionStorage.getItem('Email'));
    // console.log(sessionStorage.getItem('Name'));
    // console.log(sessionStorage.getItem('UserId'));
    // console.log(sessionStorage.getItem('Token'));


  }
  componentDidMount() {

    fetch("http://localhost:3001/getpost", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ "userId": "6280739b609a0f5cbcb51d16" })
    })
      .then(res => res.json())
      .then(data => {
        // sessionStorage.setItem('Email', data.data[0].Email);
        // sessionStorage.setItem('UserId', data.data[0]._id);
        // sessionStorage.setItem('Token', data.data[0].Token);
        // sessionStorage.setItem('Name', data.data[0].Name);
        
        this.setState({
          imgs: data, //set state of the imgs
        });
        // console.log('calling this state imgs')
        // console.log(this.state.imgs);
        
      });
  }


  render() {
    return (
      <div className="mainhome">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Uploadfile></Uploadfile>
        {this.state.imgs.map((val) => {
          return(
            <Posts info={val}></Posts>
          )
        })}

      </div>

    )
  }
}

export default Home;
