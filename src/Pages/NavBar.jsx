import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Css/App.css'
export default function NavBar() {

  const [pg,setPg]=useState(0);
  const home=()=>{
    setPg(0)
  }
  const blogs=()=>{
    setPg(1)
  }
  const newblogs=()=>{
    setPg(2)
  }
  const search=()=>{
    setPg(3)
  }
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id='nav' >
  <h1><Link class="navbar-brand" to="Home">Blogs</Link></h1>
  <span style={{minWidth:'50%'}}></span>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link class={pg===0?"present":"nav-link"} to="Home" onClick={home}>Home </Link>
      </li>
    </ul>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link class={pg===1?"present":"nav-link"} to="myBlogs" onClick={blogs}>My Blogs </Link>
      </li>
    </ul>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link class={pg===2?"present":"nav-link"} to="Write" onClick={newblogs}>New Blog </Link>
      </li>
    </ul>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link class={pg===3?"present":"nav-link"} to="search" onClick={search}>Search </Link>
      </li>
    </ul>
    {/* <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
      <li class="nav-item active">
      <Link class="nav-link" to="search">
        <div >
          <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt=""  style={{borderRadius:'100px',height:'50px',width:'50px'}} />
        </div>
      </Link>
      </li>
    </ul> */}
  </div>
</nav>
  )
}
