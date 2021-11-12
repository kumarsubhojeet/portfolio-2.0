import React from "react";
import "../CSS/Tech.css";
import Carousel from "react-elastic-carousel";
import { TechData } from "../Components/TechData";

export default function Tech() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div>
      <div className="Tech_main">
        <div className="heading_tech">
          <h2>Technologies i use</h2>
        </div>
        
        <div className="tech-crousal">
          <Carousel
            breakPoints={breakPoints}
            pagination={false}
            enableAutoPlay={true}
            itemPadding={[10, 20]}
            autoPlaySpeed={4300}
            preventDefaultTouchmoveEvent={true}
          >
            {TechData.map((datas) => (
              <div class="cards">
                <img class="tech_images" src={datas.img} alt="Error" />
                <div class="card-body">
                  <p class="card-text" style={{fontSize:"18px"}}>
                      {datas.name}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
