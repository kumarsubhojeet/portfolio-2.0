import React from "react";
import "../CSS/Projects.css";

import { ProjectData } from "../Components/data";

export default function Projects() {
  return (
    <div>
      <div className="project_main">
        <div className="project_heading"><h1>latest Projects</h1></div>

        <section>
          <div className="row">
            {ProjectData.map((data) => (
           <div className="col-md-4 col-12">
                  <div class="card" style={{ width: "18rem" }}>
                <img
                  class="card-img-top"
                  src={data.img}
                  alt="Error"
                />
                <div class="card-body">
                <h5 class="card-title"  style={{fontWeight:"bold"}}>{data.name}</h5>
                  <p class="card-text">
                    {data.desc}
                  </p>

                  <a href={data.link} target="_blank"without rel="noreferrer"  style={{textDecoration: "none"}}><h4>Visit</h4></a>
                </div>
              </div>
           </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
