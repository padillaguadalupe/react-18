import React from "react";
import { utils } from "../utils/utils";

const About = () => {
   return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">Home</h5>
            <p className="card-text"> {utils.content}</p>
          </div>
       </div>
    </div>
   
   )
} 
export default About;