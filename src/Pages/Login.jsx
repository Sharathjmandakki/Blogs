import React, { useEffect, useState } from 'react'
import axios from "axios";
import '../Css/App.css'
export default function Login() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('');
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

  const login = async (e) => {
    e.preventDefault()
    try {
      let response = await axios.post("http://localhost:8080/login", {
         email: email,
         password: password 
      })
      console.log(response);
      if (response.data === 'successfull') {
        window.location.href = '/Home'
      } else {
        alert(response.data)
      }
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div className='contant'>
      <form onSubmit={login} className='form'>
        <h1>Login</h1>
        <div class="mb-3">
          <label for="email" class="form-label">email</label>
          <input type="text" class="form-control" id="email" name='email' placeholder="Email" value={email} onChange={a => setEmail(a.target.value)} />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" autoComplete='true' name='password' value={password} placeholder="Password" onChange={a => setPassword(a.target.value)} />
        </div>
        <div style={{ display: "flex", justifyContent: 'space-between' }}>
          <button type="submit" class="btn btn-primary" className='postbtn'>Login</button>
          <a href="Register" className='postbtn'><div id='abtn'>New User</div></a>
        </div>
      </form>
    </div>
  )
}
