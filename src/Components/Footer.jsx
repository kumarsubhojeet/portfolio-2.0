import React from "react";
import "../CSS/Footer.css";
import { BackTop } from "antd";
import up from "../img/up.png";

export default function Footer() {
  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "",
    color: "#000",
    textAlign: "center",
    fontSize: 40,
  };
  return (
    <div>
      <div className="footer_main">
        <div className="f_heading">
          <h1>@2021</h1>
        </div>
        <div className="f_desc">
          <p>Design & Built by kumar Subhojit</p>
         
        
         <BackTop>
            <div style={style} className='top'>
          
              <i class="fas fa-level-up-alt"></i> 
            </div>
          </BackTop>
        
        </div>
      </div>
    </div>
  );
}
