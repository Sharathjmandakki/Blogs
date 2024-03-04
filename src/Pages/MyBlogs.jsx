import React, { useState,useEffect } from 'react'
import axios from 'axios';
import '../Css/App.css'
import { useNavigate } from 'react-router-dom';
export default function MyBlogs() {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
    const getMyBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:8080/myblogs');
            console.log(response.data);
            if (response.data.length === 0) {
                document.getElementById('showmyblogs').innerHTML = '<h1>User Haven\'t create a blog</h1>';
            } else {
                // document.getElementById('showmyblogs').innerHTML =''
                setBlogs(response.data);
            }
        }
        catch (e) {
            document.getElementById('showmyblogs').innerHTML = '<h1>Create a New Blogs</h1>';
        }
    }
    getMyBlogs()},[]);
    const navigate = useNavigate();
    const handleClick = (blog) => {
        navigate('/myview', { state: { data: blog } });
    }
    return (
        <div className='contant' id='view'>
            <div id='showmyblogs'>
                {
                    blogs.map((blog) => (
                        <div class="card" key={blog.id}>
                            <img src={blog.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div id="box" ><h5 class="card-title">{blog.messageTitle}</h5><h5 class="card-text">{blog.uploadBy}</h5></div>
                                <button onClick={async () => handleClick(blog)} style={{ width: '100%', border: 'none', backgroundColor: 'transparent' }}><div class="btn btn-primary" id="boxbtn" >View more</div></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
