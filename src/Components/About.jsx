import React from "react";
import "../CSS/About.css";
import ABOUT from "../img/ABout.svg";
import { Progress } from "antd";

export default function About() {
  return (
    <div>
      <div className="About_main">
        <div className="about_left">
          <div className="about-r-bg">
            <img src={ABOUT} className="about_img" alt="Error" />
          </div>
        </div>

        <div className="about_right">
          <h3 className="about_right_h3">About</h3>
          <p className="about_right_p">
            Hello there! I'm Kumar Subhojit. I'm a Web Developer and Software
            Developer Hard-Working individual with proficiency in web
            development and App development, as well as strong skills and
            ability in writing clean and efficient code. I'm a quick learner and
            always want to learn more and more, to enhance my skills. A strong
            individual and contributor as well as team player. A positive
            attitude and communicative, a dependable person is great at time
            management.
          </p>

          <div className="about_titles">
            <div className="about_titles_wrapper">
              <div className="about_title-items">20+ Projects</div>
              <div className="about_title-items">2 Internships</div>
              <div className="about_title-items">
                1 certification course in HTML
              </div>
            </div>
          </div>

          <div className="about_progress">
            <div className="front-end">
              <h5>Front-End</h5>
              <Progress percent={80} />
            </div>

            <div className="front-end">
              <h5>Back-End</h5>
              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={60}
              />
            </div>

            <div className="front-end">
              <h5>Mobile-App Development</h5>
              <Progress
                strokeColor={{
                  "0%": " #e80808 ",
                  "100%": " #e85608 ",
                }}
                percent={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
