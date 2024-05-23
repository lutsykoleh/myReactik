import { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import "./LatestArticle.scss";

const src = "http://91.107.217.207/latest-articles?_format=json";
const host = "http://91.107.217.207";

export default function LatestArticle() {
  const [LatestArticle, setLatestArticle] = useState([]);

  useEffect(() => {
    axios
      .get(src)
      .then((data) => {
        setLatestArticle(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="latest-article">
      <h2 className="latest-article-title">ARTIKEL TERBARU</h2>
      <div className="latest-article-items row">
        {LatestArticle.map((article, index) => {
          return (
            <div
              className="latest-article-item col-md-6 col-lg-4 col-sm-6"
              key={index}
            >
              <div className="latest-article-item__image">
                <img
                  src={`${host}${article.field_image_1}`}
                  alt="Latest Article"
                ></img>
              </div>
              <div className="latest-article-item__date">
                <p>{article.field_date}</p>
              </div>
              <div className="latest-article-item__title">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(article.title_1),
                  }}
                ></h3>
              </div>
              <div className="latest-article-item__body">
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(article.body),
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
