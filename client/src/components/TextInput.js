import React from 'react'
import { useState } from 'react';


function TextInput() {
    let sendSigninDataToServer = async ()=>{

        let dataToSend = {
           
        }
    
        let myHeaders = new Headers();
        myHeaders.append("content-type","application/json")
    
        let reqOptions = {
            method:"POST",
            body:JSON.stringify(dataToSend),
            headers:myHeaders,
        };
    let JSONData = await fetch("http:localhost:1111/textinput",reqOptions);
    
    let JSOData = await JSONData.json()
    console.log(JSOData);
    };
    
     
      const [inputValue, setInputValue] = useState('');
      
      const handleInputChange = (event) => {
        const newValue = event.target.value;
        
        if (newValue.length <= 50) {
          setInputValue(newValue);
        }
      };
      const [text, setText] = useState('');
      const maxCharLimit = 200;
    
      const handleTextChange = (event) => {
        const newText = event.target.value;
        
        if (newText.length <= maxCharLimit) {
          setText(newText);
        }
      };
  return (
    <div>
     
      
    <h1> RRR is a 2022 Indian Telugu-language epic action film </h1>
      <p> "RRR" is an Indian period action film directed by S.S. Rajamouli, depicting fictionalized accounts of freedom fighters Alluri Sitarama Raju and Komaram Bheem in the 1920s, featuring Ram Charan and NTR Jr.</p>
  <img src='https://res.cloudinary.com/dwit0pldm/image/upload/v1692886982/RRR_Image_cowseb.jpg'></img>
  <br></br>
  <video  id="video" src='https://res.cloudinary.com/dwit0pldm/video/upload/v1692887222/RRR_Trailer_Telugu_-_2022_vonznb.mp4' controls></video>
  </div>
  )
}

export default TextInput