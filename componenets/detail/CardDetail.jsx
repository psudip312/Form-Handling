import React, { useState,useEffect} from "react";
import Axios from "axios";

import image from "./avatar.png"
import "./CardDetail.css"
import { useNavigate, useParams } from "react-router-dom";
const CardDetail = () => {

  const [data,setData]=useState([])
  const navigate=useNavigate()
  const {id}=useParams()
  console.log(typeof(id))

  useEffect(()=>{
    Axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) =>{
      console.log(res.data)
      setData(res.data);
    });
  },[])
  
  const matchItem = data.find((item) => item.id === parseInt(id)) || null;
  if (!matchItem) {
    return <p>Loading...</p>;
  }
console.log("heeee",matchItem)
  return (
    <>
      <div>
        <h1>Card Detail</h1>
      </div>
      <div class="card">
      <img className="i" src={image} ></img>
        <h2>{matchItem.title}</h2>
        <p class="title">CEO & Founder</p>
        <p>{matchItem.body}Hi this is Sudip Sharma Poudel all the way from kathmandhu. Currently I work at Kaha Masovison Company under the guidance of workers.</p>
        <p>
          <button>Contact</button>
          <button onClick={()=>navigate("/")}>Return to Home !!!</button>
        </p>
      </div>
    </>
  );
};

export default CardDetail;
