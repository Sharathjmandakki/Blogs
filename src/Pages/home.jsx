import React, { useEffect, useState } from 'react'
import '../Css/App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate=useNavigate();
  const [blogs,setBlogs]=useState([])
  useEffect(()=>{
    const getBlogs=async()=>{
      let blogs='';
      try{
        const response=await axios.get('http://localhost:8080/viewblogs');
        console.log(response.data);
        setBlogs(response.data)
        if(response.data.length===0){
          blogs+='<h1>Please create a new blog</h1>'
          document.getElementById('showblogs').innerHTML=blogs
        }
      }
      catch(e){
        blogs='<h1>Somting went Wrong</h1>'
        document.getElementById('showblogs').innerHTML=blogs
      }
    }
    getBlogs()},[])

  const handleClick=(blog)=>{
    navigate('/view', { state: {data:blog} });
  }
  return (
    
    <div className='contant' id='view'>
      <div id='showblogs'>
        {
          blogs.map((blog)=>(
            <div class="card">
              <img src={blog.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <div id="box" ><h5 class="card-title">{blog.messageTitle}</h5><h5 class="card-text">{blog.uploadBy}</h5></div>
                <button onClick={async()=>handleClick(blog)} style={{width:'100%',border:'none',backgroundColor:'transparent'}}><div class="btn btn-primary" id="boxbtn" >View more</div></button>
          </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
