import { useState, useEffect } from "react";
import { fetchData } from "/src/services/apiService";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FirstSlider.scss";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/design-tutorials-first?_format=json`;

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};
export default function FirstSlider() {
  const [firstSlider, setFirstSlider] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setFirstSlider(data);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div className="first-slider">
      <h2 className="first-slider-title">Tutorial design</h2>
      <div className="first-slider-items">
        <Slider {...sliderSettings}>
          {firstSlider.map((sliderItem, index) => {
            return (
              <div className="first-slider-item" key={index}>
                <div className="first-slider-item__image">
                  <img
                    src={`${host}${sliderItem.field_image_1}`}
                    alt={
                      sliderItem.title_1?.replace(/(<([^>]+)>)/gi, "") ||
                      "Slider image"
                    }
                  ></img>
                </div>
                <div className="first-slider-item__date">
                  <p>{sliderItem.field_date}</p>
                </div>
                <div className="first-slider-item__title">
                  <h3>{sliderItem.title_1}</h3>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
