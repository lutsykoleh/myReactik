import { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import "./OtherArticles.scss";

const src = "http://91.107.217.207/latest-articles?_format=json";
const host = import.meta.env.VITE_API_HOST;

export default function OtherArticles() {
  const [otherArticles, setOtherArticles] = useState([]);

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
      <h2 className="other-articles-title">Artikel Lainnya</h2>
      <div className="other-article-items row">
        {otherArticles.map((otherArticleItem, index) => {
          return (
            <div className="other-article-item" key={index}>
              <div className="other-article-item-block-1 col-lg-7 col-8">
                <div className="other-article-item__date">
                  <p>{otherArticleItem.field_date}</p>
                </div>
                <div className="other-article-item__title">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(otherArticleItem.title_1),
                    }}
                  ></h3>
                </div>
                <div className="other-article-item__body">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(otherArticleItem.body),
                    }}
                  ></div>
                </div>
              </div>
              <div className="other-article-item-block-2 col-lg-5 col-4">
                <div className="other-article-item__image">
                  <img
                    src={`${host}${otherArticleItem.field_image_1}`}
                    alt={
                      otherArticleItem.title_1?.replace(/(<([^>]+)>)/gi, "") ||
                      "Other article image"
                    }
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
