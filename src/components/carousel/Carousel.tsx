import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonFilled from "../common/button/ButtonFilled";
import "./carousel.scss";

const Carousel = () => {
  const carouselLenght = 3;
  const [selected, setSelected] = useState(1);
  const navigate = useNavigate();

  const checkButton = (index: number) => {
    setSelected(index);
    var el = document.getElementById(`slide${index}`) as HTMLInputElement;
    el.checked = true;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (selected === carouselLenght) checkButton(1);
      else checkButton(selected + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [selected]);

  return (
    <div className="carousel-container">
      <div className="carousel-container__slides">
        <input type="radio" name="slide" id="slide1" defaultChecked />
        <input type="radio" name="slide" id="slide2" />
        <input type="radio" name="slide" id="slide3" />

        <div className="slide s1">
          <img src={require("../../assets/home1.jpg")} alt="First background" />
        </div>
        <div className="slide">
          <img
            src={require("../../assets/home2.jpg")}
            alt="Second background"
          />
        </div>
        <div className="slide">
          <img src={require("../../assets/home3.jpg")} alt="Third background" />
        </div>

        <div className="carousel-container__slides__content">
          <p className="carousel-container__slides__content__title">
            YOU ARE ON THE HOME PAGE
          </p>
          <ButtonFilled
            buttonProps={{
              title: "GO TO NEWS",
              onClickFunction: () => {
                navigate("/news");
              },
            }}
          />
        </div>

        <button
          className="carousel-container__prev"
          onClick={() => {
            if (selected === 1) checkButton(carouselLenght);
            else checkButton(selected - 1);
          }}
        >
          &#10094;
        </button>
        <button
          className="carousel-container__next"
          onClick={() => {
            if (selected === carouselLenght) checkButton(1);
            else checkButton(selected + 1);
          }}
        >
          &#10095;
        </button>
      </div>
      <div className="carousel-container__navigation">
        <span
          className={
            selected === 1
              ? "carousel-container__navigation__bar--selected"
              : "carousel-container__navigation__bar"
          }
          onClick={() => checkButton(1)}
        ></span>
        <span
          className={
            selected === 2
              ? "carousel-container__navigation__bar--selected"
              : "carousel-container__navigation__bar"
          }
          onClick={() => checkButton(2)}
        ></span>
        <span
          className={
            selected === 3
              ? "carousel-container__navigation__bar--selected"
              : "carousel-container__navigation__bar"
          }
          onClick={() => checkButton(3)}
        ></span>
      </div>
    </div>
  );
};

export default Carousel;
