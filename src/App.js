
import "./App.css";
import Login  from "./Login";
import Home  from "./Home";
import Sidebar from "./Sidebar";
import Posts from "./Posts";
import Uploadfile from './Uploadfile';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" >
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Sidebar" element={<Sidebar />}></Route>
          <Route path="/Post" element={<Posts />}></Route>
          <Route path="/Uploadfile" element={<Uploadfile />}></Route>
        </Routes>
    </div>
  );
}

export default App;
