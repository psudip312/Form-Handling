import React from "react";
import p from "./oo.jpg";
import "./Cards.css";
import { useNavigate } from "react-router-dom";
const Cards = ({ data }) => {
  console.log("dataaayo", data);
  const navigate = useNavigate();
  return (
    <>
      <div class="card">
        <h2>User Profile Card</h2>
        <img src={p} alt="John" />
        <h1>Name:{data.id}</h1>
        <p class="title"></p>
        <p></p>
        <p>
          <button onClick={() => navigate(`/detail/${data.id}`)}>
            More Details!!!!
          </button>
        </p>
      </div>
    </>
  );
};

export default Cards;
