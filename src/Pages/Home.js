// Home.js
import React, { useState } from "react";
import imageList from "../components/ImageList"; // Import the list of image filenames
import { Slide } from "react-slideshow-image";
import {
  faPenRuler,
  faHammer,
  faHouse,
  faBoreHole,
} from "@fortawesome/free-solid-svg-icons";
import InformationCard from "../components/InformationCard";
import Process from "../components/Process";
import "react-slideshow-image/dist/styles.css";
import "../css/Home.css";
import ProjectCards from "../components/ProjectCards";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "700px",
};

const Home = () => {
  // State to track the color of each circle
  const [circleColor, setCircleColor] = useState({});

  // Function to toggle the color of the circle
  const toggleCircleColor = (index) => {
    setCircleColor((prevColor) => ({
      ...prevColor,
      [index]: prevColor[index] === "red" ? "blue" : "red",
    }));
  };

  return (
    <div>
      <br />
      <div className="slide">
        <Slide>
          {imageList.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
      </div>

      <br />

      <div className="services">
        <h3 className="services-title">
          <span>Dịch Vụ</span>
        </h3>
        <div class="services-container">
          <InformationCard
            title="THIẾT KẾ NỘI, NGOẠI THẤT"
            description="This is the description of the first feature of our app. We are going to briefly outline what this feature does"
            icon={faPenRuler}
          />
          <InformationCard
            title="THI CÔNG NỘI, NGOẠI THẤT"
            description="This is the description of the first feature of our app. We are going to briefly outline what this feature does"
            icon={faHammer}
          />
          <InformationCard
            title="THIẾT KẾ KIẾN TRÚC, KẾT CẤU"
            description="This is the description of the first feature of our app. We are going to briefly outline what this feature does"
            icon={faHouse}
          />
          <InformationCard
            title="THI CÔNG ĐÓNG, ÉP CỌC"
            description="This is the description of the first feature of our app. We are going to briefly outline what this feature does"
            icon={faBoreHole}
          />
        </div>
      </div>

      <br />
      <ProjectCards />
      <br />
      <Process />

      <br />
    </div>
  );
};

export default Home;
