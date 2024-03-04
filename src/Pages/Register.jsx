import React, { useState ,useEffect} from 'react'
import '../Css/App.css'
import axios from 'axios'
export default function Register() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  useEffect(() => {
    const navElement = document.getElementById('nav');
    if (navElement) {
      navElement.style.display = 'none';
    }

    // Cleanup on component unmount
    return () => {
      // Restore the display property to its original value or set it to 'block' as needed
      if (navElement) {
        navElement.style.display = ''; // This will remove the 'display' property, reverting to the stylesheet value
      }
    };
  }, []); 
  const register = async (e) => {
    e.preventDefault()
    // handleUpload()
    try {
      let response = await axios.post("http://localhost:8080/adduser", {
        email: email,
        password: password,
        username: username,
        userDp:null,
      })
      console.log(response);
      if (response.data === 'User added') {
        window.location.href = '/Login'
      } else {
        alert(response.data)
      }
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div className='contant'>
      <form onSubmit={register} className='form'>
        <h1>Register Here</h1>
        <div class="mb-3">
          <label for="username" class="form-label">username</label>
          <input required type="text" class="form-control" id="username" name='username' placeholder="Username" value={username} onChange={e => { setUsername(e.target.value) }} />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">email</label>
          <input required type="text" class="form-control" id="email" name='email' placeholder="Email" value={email} onChange={e => { setEmail(e.target.value) }} />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input  required type="password" class="form-control" id="password" name='password' placeholder="Password" value={password} onChange={e => { setPassword(e.target.value) }} />
        </div>
        <div class="mb-3">
      <label for="user_image" class="form-label">Select your image</label>
          <input type="file" class="form-control" accept="image/*" id="user_image" name='user_image'/>
         
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="submit"  class="btn btn-primary" className='postbtn'>Register</button>
        </div>
      </form>
    </div>
  )
}
