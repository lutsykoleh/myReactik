import { useState, useEffect } from "react";
import { fetchData } from "/src/services/apiService";
import DOMPurify from "dompurify";
import "./LatestArticle.scss";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/latest-articles?_format=json`;

export default function LatestArticle() {
  const [latestArticle, setLatestArticle] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setLatestArticle(data);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div className="latest-article">
      <h2 className="latest-article-title">ARTIKEL TERBARU</h2>
      <div className="latest-article-items row">
        {latestArticle.map((article, index) => {
          return (
            <div
              className="latest-article-item col-md-6 col-lg-4 col-sm-6"
              key={index}
            >
              <div className="latest-article-item__image">
                <img
                  src={`${host}${article.field_image_1}`}
                  alt={
                    article.title_1?.replace(/(<([^>]+)>)/gi, "") ||
                    "Latest article image"
                  }
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
