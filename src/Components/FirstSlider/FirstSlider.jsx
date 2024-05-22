import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FirstSlider.scss";

const src = "http://91.107.217.207/design-tutorials-first?_format=json";
const host = "http://91.107.217.207";

export default function FirstSlider() {
  const [FirstSlider, setFirstSlider] = useState([]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    axios
      .get(src)
      .then((data) => {
        setFirstSlider(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="first-slider">
      <h2 className="first-slider-title">Tutorial design</h2>
      <div className="first-slider-items">
        <Slider {...settings}>
          {FirstSlider.map((FirstSlider) => {
            return (
              <div className="first-slider-item ">
                <div className="first-slider-item__image">
                  <img src={`${host}${FirstSlider.field_image_1}`}></img>
                </div>
                <div className="first-slider-item__date">
                  <p>{FirstSlider.field_date}</p>
                </div>
                <div className="first-slider-item__title">
                  <h3>{FirstSlider.title_1}</h3>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
