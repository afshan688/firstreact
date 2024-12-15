import React from "react";  
import ReactDom from "react-dom/client";
  
const rootDiv = document.getElementById("root");   

ReactDom.createRoot(rootDiv).render(
  <div>  
    <h1>Hello React 5 </h1>    
    <h1>My First React App</h1> 
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vitae error
      consequuntur quibusdam sint vero, provident maxime eius adipisci. Nemo
      voluptate quasi suscipit iste cum officia eos accusamus eligendi sint  
      nisi, quis id error animi deleniti beatae unde. Quas enim officiis optio,
      similique
    </p>
    <img src="/public/vite.svg" alt="" /> 
    <img src="https://cdn-icons-png.flaticon.com/512/1183/1183672.png" alt="" width="200" /> 
    <img src ="https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png" alt="" width="500" ></img>
  </div>  
);  
