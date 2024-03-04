import React from 'react'
import '../Css/App.css'
import { useState } from 'react'
import axios from 'axios';
export default function Write() {
  const [catagory, setCatagory] = useState('Food blogs');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const [img,setImg]=useState(null);


  const upload = async (e) => {
    alert(catagory);
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/addblog', {
        messageTitle: title,
        messageBody: content,
        category: catagory,
        // image:''
      })
      alert(response.data + " 🥳")

      if (response.data === 'blog added') {
        window.location.href = '/Home'
      }
    } catch (e) {
      alert(e)
    }
  }
  const [cat, setCat] = useState([]);
  const myArray = [
    "Food blogs",
    "Travel blogs",
    "Health and fitness blogs",
    "Lifestyle blogs",
    "Fashion and beauty blogs",
    "Photography blogs",
    "Personal blogs",
    "DIY craft blogs",
    "Parenting blogs",
    "Music blogs",
    "Business blogs",
    "Art and design blogs",
    "Book and writing blogs",
    "Personal finance blogs",
    "Interior design blogs",
    "Sports blogs",
    "News blogs",
    "Movie blogs",
    "Religion blogs",
    "Political blogs"
  ];

  return (
    <div className='contant'>
      <form onSubmit={upload} method="post" className='form'>
        <h1>Write a blog</h1>
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" required placeholder="title of blog" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="Catagory" class="form-label">Catagory</label>
          <select id="Catagory" class="form-select" required onChange={e => setCatagory(e.target.value)} >
            {
              myArray.map((cat) => (
                <option>{cat}</option>
              ))
            }
          </select>
        </div>
        <div class="mb-3">
          <label for="Content" class="form-label">Content</label>
          <textarea class="form-control" id="Content" rows="3" required placeholder='write a content of blog' value={content} onChange={e => setContent(e.target.value)}></textarea>
        </div>
        <div class="mb-3">
          <label for="img" class="form-label">Image for Blog</label>
          <input type="file" class="form-control" id="img" name='img' onChange={{/*e=>setImg(e.target.files[0])*/ }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit" class="btn btn-primary" className='postbtn'>Post</button>
        </div>
      </form>
    </div>
  )
}
