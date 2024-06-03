import { useState, useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DOMPurify from "dompurify";
import { fetchData } from "/src/services/apiService";
import "./IndustrialDesign.scss";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/latest-articles?_format=json`;

var sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
      },
    },
    {
      breakpoint: 440,
      settings: {
        slidesToShow: 1,
        adaptiveHeight: true,
      },
    },
  ],
};

export default function IndustialDesign() {
  const [industialDesign, setIndustialDesign] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setIndustialDesign(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="industrial-design">
      <h2 className="industrial-design-title">Industial Design</h2>
      <div className="industrial-design-items row">
        <Slider {...sliderSettings}>
          {industialDesign.map((IndustialDesignItem, index) => {
            return (
              <div className="industrial-design-item" key={index}>
                <div className="industrial-design-item__image">
                  <img
                    src={`${host}${IndustialDesignItem.field_image_1}`}
                    alt={
                      IndustialDesignItem.title_1?.replace(
                        /(<([^>]+)>)/gi,
                        ""
                      ) || "Indrustial Design image"
                    }
                  ></img>
                </div>
                <div className="industrial-design-item__date">
                  <p>{IndustialDesignItem.field_date}</p>
                </div>
                <div className="industrial-design-item__title">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(IndustialDesignItem.title_1),
                    }}
                  ></h3>
                </div>
                <div className="industrial-design-item__body">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(IndustialDesignItem.body),
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
