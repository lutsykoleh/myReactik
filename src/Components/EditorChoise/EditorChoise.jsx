import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import Slider from "react-slick";
import DOMPurify from "dompurify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EditorChoise.scss";

const src = "http://91.107.217.207/editors-choice?_format=json";
const host = "http://91.107.217.207";

export default function EditorChoise() {
  const [EditorChoise, setEditorChoise] = useState([]);

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
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    axios
      .get(src)
      .then((data) => {
        setEditorChoise(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="editor-choise">
      <h2 className="editor-choise-title">Pilihan editor</h2>
      <div className="editor-choise-slider">
        <Slider {...settings}>
          {EditorChoise.map((editorItem, index) => {
            return (
              <div className="editor-choise-slider-item" key={index}>
                <div className="editor-choise-slider-item__image">
                  <img
                    src={`${host}${editorItem.field_image_1}`}
                    alt="Editor Choice"
                  ></img>
                </div>
                <div className="editor-choise-slider-item__date">
                  <p>{editorItem.field_date}</p>
                </div>
                <div className="editor-choise-slider-item__title">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(editorItem.title_1),
                    }}
                  ></h3>
                </div>
                <div className="editor-choise-slider-item__body">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(editorItem.body),
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
