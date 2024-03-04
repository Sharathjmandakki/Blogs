import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';
export default function MyBlogEdit(props) {
    var data = useLocation().state.data;
    const navigate=useNavigate();
    const editBlog=()=>{
        navigate('/edit', { state: { data: data } });
    }
    const deleteBlog=async()=>{
        try{
            const response= await axios.delete('http://localhost:8080/delete',{data})
            if(response.data==='deleted'){
                alert(response.data+' 🦵🅱️')
                window.location.href = '/Home'
            }else{
                alert(response.data+' 😔')
            }
        }catch(e){
            console.log(e);
        }
        
    }
    return (
        <div style={{minWidth: '400px'}}>
            <div style={{paddingLeft: '10px', paddingRight: '10px', margin: '20px', borderRadius: '15px', color: 'wheat' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '10px' }}>
                    <img src={data.image} alt='blog image' style={{ borderRadius: '10px',maxWidth:'50%',minWidth:'300px' }} />
                    <div style={{ display: 'grid', justifyContent: 'space-evenly', width: '50%', padding: '10px', fontFamily: 'cursive', letterSpacing: '2px' }}>
                        <h1 style={{ display: 'flex', justifyContent: 'center', wordSpacing: '10px', fontFamily: 'fantasy', letterSpacing: '5px' }}>"{data.messageTitle}"</h1>
                        <hr style={{ color: 'gray' }} />
                        <h3>By : {data.uploadBy}</h3>
                        <h5>Category : {data.category}</h5>
                        <h5>On : {data.uploadTime}</h5>
                        <hr/>
                        <div style={{fontSize:'20px',justifyContent:'center',display:'flex'}}>
                        <button disabled style={{backgroundColor: 'transparent',border:'none',color:'wheat'}}><FcLike/> {(data.likes>0)?data.likes:'No likes yet'}</button>
                        <span style={{color:'wheat',margin:'10px'}}>|</span>
                        <button onClick={editBlog} style={{backgroundColor: 'transparent',border:'none',color:'wheat'}}><FaEdit/> Edit</button> <span style={{color:'wheat',margin:'10px'}}>|</span>
                        <button onClick={deleteBlog} style={{backgroundColor: 'transparent',border:'none',color:'wheat'}}><MdDelete /> Delete</button> </div>
                    </div>
                </div>
                <hr />
                <div style={{ display: 'flex', textAlign: 'justify', fontSize: '20px' }}>{data.messageBody}</div>
            </div>
        </div>
    )
}
