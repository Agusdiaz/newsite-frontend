import React from "react";
import Carousel from "../../components/carousel/Carousel";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container__carousel">
        <Carousel />
      </div>
      <div className="home-container__information"></div>
    </div>
  );
};

export default Home;
