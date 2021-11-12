import React from "react";
import school from '../img/school.svg';

import "../CSS/Edu.css"
import { Timeline } from 'antd';

export default function Education() {
  return (
    <div>
      <div className="Edu_main">
        <div className="edu_left">
          <div className="timeline">
              <div className="tagline">
                  <h1>Education</h1>
              </div>
              <Timeline>
          <div className="schools">
          <Timeline.Item color="green">
            <div className="svm">
              <h2>Graduation</h2>
              <p>
                <i class="far fa-calendar-alt calander"></i> <span>2019-22</span>
              </p>
              <a
              style={{textDecoration:"none"}}
                href="https://adypu.edu.in/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h3 className="school_name" title="Click to visit">Ajeenkya DY Patil University,Pune,Maharastra,India</h3 >
              </a>
            </div>
            </Timeline.Item>
            <Timeline.Item color="orange">
            <div className="svm">
              <h2>Diploma</h2>
              <p>
                <i class="far fa-calendar-alt calander"></i> <span>2015-18</span>
              </p>
              <a
              style={{textDecoration:"none"}}
                href="http://www.bittpolytechnic.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h3 className="school_name" title="Click to visit">BITT Polytechnic,Ranchi,Jharkhand,India</h3 >
              </a>
            </div>
            </Timeline.Item>
            <Timeline.Item>
            <div className="svm">
              <h2>High School</h2>
              <p>
                <i class="far fa-calendar-alt calander"></i> <span>2014-15</span>
              </p>
              <a
              style={{textDecoration:"none"}}
                href="https://ssmshyamdih.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <h3 className="school_name" title="Click to visit">
                  Saraswati Shishu Mandir,shyamdih,katrasbazar,Jharkhand,India
                </h3 >
              </a>
            </div>
            </Timeline.Item>
          </div>
          </Timeline>
        </div>
        </div>


        <div className="edu_right">

        <div className="edu_right_bg">
          <img src={school} className="about_img" alt="Error" />
          </div>

        </div>


      </div>
    </div>
  );
}
