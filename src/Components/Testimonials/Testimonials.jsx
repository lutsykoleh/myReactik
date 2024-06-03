import { useState, useEffect } from "react";
import { fetchData } from "/src/services/apiService";
import DOMPurify from "dompurify";
import "./Testimonials.scss";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/testimonials?_format=json`;

export default function Testimonials() {
  const [Testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setTestimonials(data);
      } catch (error) {}
    };

    getData();
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
                    alt={
                      Testimonials.title_1?.replace(/(<([^>]+)>)/gi, "") ||
                      "Testimonial image"
                    }
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
