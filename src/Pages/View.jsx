import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import axios from 'axios';
import '../Css/tooltip.css'
export default function View(props) {
    var data = useLocation().state.data;
    const [like, setLike] = useState(data.likes)
    const [count, setCount] = useState(0)
      useEffect(()=>{
        const user=async()=>{
            try{
            const response=await axios.post("http://localhost:8080/checkuser",{
                messageTitle:data.messageTitle,
            });
            setCount(response.data.check)
        }catch(e){
            console.log(e);
            user()
        }
        }
        user()
      },[])
    const handelLike = async () => {
        if (count === 0) {
            setCount(1)
            setLike(like + 1)
            const response =await axios.put("http://localhost:8080/likes", {
                messageTitle:data.messageTitle,
                category:data.category,
                likes: like+1
            });
        } else {
            setCount(0)
            setLike(like - 1)
            const response =await axios.put("http://localhost:8080/unlikes", {
                messageTitle:data.messageTitle,
                category:data.category,
                likes: like-1
            });
        }
        
    }


    return (
        <div style={{ minWidth: '400px' }}>
            <div style={{ paddingLeft: '10px', paddingRight: '10px', margin: '20px', borderRadius: '15px', color: 'wheat' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '10px' }}>
                    <img src={data.image} alt={data.messageTitle + " image"} style={{ borderRadius: '10px', maxWidth: '50%', minWidth: '300px' }} />
                    <div style={{ display: 'grid', justifyContent: 'space-evenly', width: '50%', padding: '10px', fontFamily: 'cursive', letterSpacing: '2px' }}>
                        <h1 style={{ display: 'flex', justifyContent: 'center', wordSpacing: '10px', fontFamily: 'fantasy', letterSpacing: '5px' }}>"{data.messageTitle}"</h1>
                        <hr style={{ color: 'gray' }} />
                        <h3>By : {data.uploadBy}</h3>
                        <h5>Category : {data.category}</h5>
                        <h5>On : {data.uploadTime}</h5>
                        <hr />
                        <div style={{ fontSize: '20px', justifyContent: 'center', display: 'flex' }} >
                            <button onClick={handelLike}style={{ backgroundColor: 'transparent', border: 'none', color: 'wheat' }}>{count === 1 ? <FcLike /> : <FcLikePlaceholder />}  {(like > 0) ? like : 'No likes yet'}</button></div>
                            <p className='tooltiptext'>This is a tooltip</p>
                    </div>
                </div>
                <hr />
                <div style={{ display: 'flex', textAlign: 'justify', fontSize: '20px' }}>{data.messageBody}</div>
            </div>
        </div>
    )
}
