import { useState, useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import DOMPurify from "dompurify";
import { fetchData } from "/src/services/apiService";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EditorChoise.scss";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/editors-choice?_format=json`;

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
        dots: false,
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

export default function EditorChoise() {
  const [editorChoise, setEditorChoise] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setEditorChoise(data);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div className="editor-choise">
      <h2 className="editor-choise-title">Pilihan editor</h2>
      <div className="editor-choise-slider">
        <Slider {...sliderSettings}>
          {editorChoise.map((editorItem, index) => {
            return (
              <div className="editor-choise-slider-item" key={index}>
                <div className="editor-choise-slider-item__image">
                  <img
                    src={`${host}${editorItem.field_image_1}`}
                    alt={
                      editorItem.title?.replace(/(<([^>]+)>)/gi, "") ||
                      "Editor choise image"
                    }
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
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(editorItem.body),
                    }}
                  ></p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
