import React from "react";
import Carousel from "../../components/carousel/Carousel";
import Link from "../../components/common/link/Link";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container__carousel">
        <Carousel />
      </div>
      <div className="home-container__information">
        <div className="home-container__information__leftInfo">
          <p className="home-container__information__leftInfo__title">
            About the APP
          </p>
          <p className="home-container__information__leftInfo__subtitle">
            The aim of this project is to improve my front-end abilities. By
            using React, HTML and SCSS, I have developed every component from
            scratch, without the help of any UI library. You can try the
            light/dark theme. Also, this APP is 100% responsive 💻📱. <br />
            Currently, there is no back-end service created for this
            application, that is why I am using{" "}
            <Link
              linkProps={{
                name: "MOCK-API",
                url: "https://mockapi.io/",
                target: "_blank",
              }}
            />
            . Eventually, in the future, I will connect both applications (front
            and back end).
          </p>
        </div>
        <div className="home-container__information__rightInfo">
          <p className="home-container__information__leftInfo__title">
            About me
          </p>
          <div className="home-container__information__rightInfo__subtitle-container">
            <img
              className="home-container__information__rightInfo__subtitle-container__avatar"
              src={require("../../assets/images/me.jpg")}
              alt="Owner avatar"
            />
            <p className="home-container__information__rightInfo__subtitle-container__subtitle">
              Hello there 😊 My name is Agustina Diaz. I am a software engineer
              and fullstack-developer. I took part in different projects to
              develop web applications. You can access to my linkedin by
              clicking{" "}
              <Link
                linkProps={{
                  name: "here",
                  url: "https://www.linkedin.com/in/agustinadiaz/",
                  target: "_blank",
                }}
              />
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
