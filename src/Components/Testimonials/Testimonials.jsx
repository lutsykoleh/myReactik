import { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import "./Testimonials.scss";

const src = "http://91.107.217.207/testimonials?_format=json";
const host = "http://91.107.217.207";

export default function Testimonials() {
  const [Testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get(src)
      .then((data) => {
        setTestimonials(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="testimonials">
      <h2 className="testimonials-title">TESTIMONIAL</h2>
      <div className="testimonials-items">
        {Testimonials.map((Testimonials, index) => {
          return (
            <div className="testimonials-item" key={index}>
              <div className="testimonials-item-block-1">
                <div className="other-article-item__image">
                  <img
                    src={`${host}${Testimonials.field_image_1}`}
                    alt="Other Article"
                  ></img>
                </div>
              </div>
              <div className="testimonials-item-block-2">
                <div className="testimonials-item__body">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(Testimonials.body),
                    }}
                  ></h3>
                </div>
                <div className="testimonials-item__username">
                  <p>@{Testimonials.field_remember}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
