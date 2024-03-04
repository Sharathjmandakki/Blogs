import Login from "./Pages/Login";
import Write from "./Pages/Write";
import {Route, Routes } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import './Css/App.css'
import Home from "./Pages/home";
import Entery from "./Pages/Entery";
import Register from "./Pages/Register";
import MyBlogs from "./Pages/MyBlogs";
import Search from "./Pages/Search";
import View from "./Pages/View";
import MyBlogEdit from "./Pages/myBlogEdit";
import Edit from "./Pages/Edit";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Entery/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/myBlogs" element={<MyBlogs/>}/>
        <Route path="/search/" element={<Search/>}/>
        <Route path="/myview" element={<MyBlogEdit/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/Write" element={<Write/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="Register" element={<Register/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
