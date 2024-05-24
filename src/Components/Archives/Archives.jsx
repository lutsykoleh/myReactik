import { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import "./Archives.scss";

const src = "http://91.107.217.207/archives?_format=json";
const host = "http://91.107.217.207";

export default function Archives() {
  const [Archives, setArchives] = useState([]);

  useEffect(() => {
    axios
      .get(src)
      .then((data) => {
        setArchives(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="archives">
      <h2 className="archives-title">ARSIP 2021</h2>
      <div className="archives-items">
        {Archives.map((Archives, index) => {
          return (
            <div className="archives-item" key={index}>
              <div className="archives-item__date">
                <p>{Archives.field_date}</p>
              </div>
              <div className="archives-item__title">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(Archives.title_1),
                  }}
                ></h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
