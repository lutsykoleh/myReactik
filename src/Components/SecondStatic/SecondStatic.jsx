import { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import "./SecondStatic.scss";
const src =
  "http://91.107.217.207/jsonapi/block_content/w_full_block/121c2905-1aad-4a35-b001-249f99f464e1?resourceVersion=id%3A4&include=field_image";
const host = "http://91.107.217.207";

export default function SecondStatic() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(src)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching the teaser:", error);
      });
  }, []);

  return (
    <div className="second-static row">
      <div className="second-static-col-1 col-md-6">
        <div className="second-static-col-1__title">
          <h2>{data.field_title}</h2>
        </div>
        <div className="second-static-col-1__body">
          <h3
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.body?.processed),
            }}
          ></h3>
        </div>
        <div className="second-static-col-1__button">
          <a
            href={data.field_link?.uri}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.field_link?.title}
          </a>
        </div>
      </div>
      <div className="second-static-col-2 col-md-6">
        <div className="second-static-col-2__image">
          <img
            src={`${host}${data.field_image?.uri?.url}`}
            alt={data.field_title || "Teaser image"}
          />
        </div>
      </div>
    </div>
  );
}
