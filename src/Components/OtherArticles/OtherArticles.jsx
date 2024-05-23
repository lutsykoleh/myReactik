import { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

const src = "http://91.107.217.207/latest-articles?_format=json";
const host = "http://91.107.217.207";

export default function OtherArticles() {
  const [OtherArticles, setOtherArticles] = useState([]);

  useEffect(() => {
    axios
      .get(src)
      .then((data) => {
        setOtherArticles(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="other-articles">
      <h2 className="other-articles-title">ARTIKEL TERBARU</h2>
      <div className="other-article-items row">
        {OtherArticles.map((OtherArticles, index) => {
          return (
            <div className="other-article-item" key={index}>
              <div className="other-acticle-item-block-1 col-lg-7 col-8">
                <div className="other-article-item__date">
                  <p>{OtherArticles.field_date}</p>
                </div>
                <div className="other-article-item__title">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(OtherArticles.title_1),
                    }}
                  ></h3>
                </div>
                <div className="other-article-item__body">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(OtherArticles.body),
                    }}
                  ></div>
                </div>
              </div>
              <div className="other-article-item-block-2 col-lg-5 col-4">
                <div className="other-article-item__image">
                  <img
                    src={`${host}${OtherArticles.field_image_1}`}
                    alt="Other Article"
                  ></img>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
