import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
export default function Edit(props) {
  var data = useLocation().state.data;
  const [title, setTitle] = useState(data.messageTitle);
  const [content, setContent] = useState(data.messageBody);


  const upload = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:8080/updateblog', {
        messageTitle: title,
        messageBody: content,
        id:data.id
      })
      alert(response.data + " 👏")
      if (response.data === 'blog Updated') {
        window.location.href = '/Home'
      }
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div className='contant'>
      <form onSubmit={upload} method="post" className='form'>
        <h1>Update a blog</h1>
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" required placeholder="title of blog" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="Content" class="form-label">Content</label>
          <textarea style={{minHeight:'200px'}} class="form-control" id="Content" rows="3" required placeholder='write a content of blog' value={content} onChange={e => setContent(e.target.value)}></textarea>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" class="btn btn-primary" className='postbtn'>Save</button>
        </div>
      </form>
    </div>
  )
}
