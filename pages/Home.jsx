import Form from "../componenets/form/Form";
import Cards from "../componenets/cards/Cards";
import React, { useState } from "react";
import Useref from "../componenets/useRed/Useref";
import Axios from "axios";
import { useEffect } from "react";
import "./Home.css"
const Home = () => {
  const [storedDetails, setstoredDetails] = useState([]);
  // useEffect(() => {
  //   const storedDetails = localStorage.getItem("details");
  //   setstoredDetails(storedDetails);
  // }, []);
  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      console.log(res.data);
      setstoredDetails(res.data);
    });
  }, []);
  console.log("dayta adskjd", storedDetails);
  return (
    <>
    <Form/>
      <div className="fle">
        {storedDetails.map((details, index) => {
          if (index < 10) {
            return <Cards data={details} key={index} />;
          }
        })}
      </div>
    </>
  );
};

export default Home;
