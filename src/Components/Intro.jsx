import React from "react";
import "../CSS/Intro.css";
import sk from "../img/sk.svg";
import pdf from "../Pdf/Subhojit_kumar.pdf";
import pdfimg from '../img/pdf.png'

export default function Intro() {
  return (
    <div>
      <div className="intro_main">
        
        <div className="intro_left">
          
          <div className="intro_left_wrapper">
            <h2 className="intro_hello">Hello, My Name is</h2>
            <h1 className="intro_name animate__animated animate__zoomInUp">Kumar Subhojit</h1>

            <div className="intro_titles">
              <div className="intro_titles_wrapper">
                <div className="title-items">Web Developer</div>
                <div className="title-items">Mobile App Developer</div>
                <div className="title-items">UX/UI Designer</div>
                <div className="title-items">Logo Creator</div>
              </div>
            </div>

            <div className="intro_description">
              I design & develope websites , mobile apps , Logos according to
              requirements. specifically in creating modern websites and mobile
              apps.
            </div>

            <div className="resume_main">
              <a className="resume" href={pdf} download style={{textDecoration:"none"}}>
                <h4>Resume <span><img src={pdfimg} className="pdfimg" alt="Error" /></span> </h4>
               
              </a>
            </div>
          </div>
        </div>

        <div className="intro_right">
          <div className="intro-r-bg">
           
          </div>
          <img src={sk} className="intro_img" alt="Error" />
        </div>
      </div>
    </div>
  );
}
