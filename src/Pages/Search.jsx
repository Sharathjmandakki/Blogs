import React, { useState } from 'react'
import axios from 'axios';
import View from './View';
import { useNavigate  } from 'react-router-dom';
export default function Search(props) {
  const [stitle, setStitle] = useState('')
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const handleClick =async (blog) => {
    navigate('/view', { state: {data:blog} });
  };
  const findby = async (e) => {
    document.getElementById('searchresult').innerHTML = ''
    try {
      e.preventDefault();
      const response = await axios.post('http://localhost:8080/search', {
        messageTitle: stitle,
      });
      setBlogs(response.data)
      if (response.data.length === 0) {
        document.getElementById('searchresult').innerHTML = '<h1>No blog found</h1>'
      }
    }
    catch (e) {
      document.getElementById('searchresult').innerHTML = '<h1>Somting went Wrong</h1>'
    }
  }
   return (
    <div>
      <div style={{ padding: '10px', marginLeft: '10%', marginRight: '10%', marginTop: '5%',textAlign:'center' }}>
        <h1 style={{fontFamily:'fantasy',fontSize:'40px',letterSpacing:'5px',color:'wheat',margin:'2%'}}>Search Here</h1>
        <form class="d-flex">
          <input class="form-control" type="search" value={stitle} required onChange={e => { setStitle(e.target.value) }} placeholder='search by title of blog / category of blog / person who upload blog'/>
          <button onClick={findby} class="btn btn-primary my-2 my-sm-0" type="submit" id="button">Search</button>
        </form>
      </div>
      <hr style={{ color: 'wheat' }} />
      <div id='searchresult'>
        {blogs.map((blog) => (
          <div class="card">
            <img src={blog.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <div id="box" >
            <h5 class="card-title">{blog.messageTitle}</h5><h5 class="card-text">{blog.uploadBy}</h5></div>
            <button onClick={async()=>handleClick(blog)} style={{width:'100%',border:'none',backgroundColor:'transparent'}}><div class="btn btn-primary" id="boxbtn" >View more</div></button>
          </div>
          </div>
        ))
        }
      </div>
    </div>
  )
}
