import React, { useState, useEffect } from 'react';
import Cards from '../cards/Cards';
const FormComponent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState(null);
  const [details, setDetails] = useState([]);
 

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newDetail = { name, age, image };
    // Save the new detail object in local storage
    const updatedDetails = [...details, newDetail];
    localStorage.setItem('details', JSON.stringify(updatedDetails));
    setDetails(updatedDetails);
    setName('');
    setAge('');
    setImage(null);
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </label>
        <br />
        <label>
          Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
    
    </div>
  );
};
export default FormComponent;




// import React, { useState, useEffect, useRef } from "react";
// import "./Form.css";
// import { FcUpload } from "react-icons/fc";
// const Form = () => {
//   const [name, setName] = useState();
//   const [number, setNumber] = useState();
//   const [file, setFile] = useState("");
//   const [statee, setStatee] = useState([]);
//   const inputField = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = { name, number, file: URL.createObjectURL(file) };
//     // naya jadai gareko data haru
//     setStatee([...statee, data]);
//     localStorage.setItem("formData", JSON.stringify({ statee }));
//     // suru ma k cha ta statee cha tyo rakhn ani naya data jun aaucha tyo rakhne ani naya data k ma aaucha ta ? data ma aaucha so
//     setName("");
//     setNumber("");
//     setFile("");
//   };
//   useEffect(() => {
//     const savedData = localStorage.getItem("formData");
//     if (savedData) {
//       setStatee(JSON.parse(savedData));
//     }
//   }, []);

//   const handleFileUpload = (e) => {
//     console.log(e.target.files[0], "hello");
//     setFile(e.target.files[0]);
//   };
//   const handlebutton = () => {
//     inputField.current.click();
//   };
//   return (
//     <>
//       <h2>Upload Form</h2>
//       <form>
//         <label>Name:</label>
//         <br />
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <label>Number:</label>
//         <br />
//         <input
//           type="phone"
//           name="Number"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//         />
//         <br />
//         <label>Image:</label>
//         <br />
//         <br />
//         <input className="makeithidden" ref={inputField} type="file" />
//         <FcUpload className="uploadButton" onClick={handlebutton} />
//       </form>
//     </>
//   );
// };

// export default Form;
