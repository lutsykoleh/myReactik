import { useState, useEffect } from "react";
import { fetchData } from "/src/services/apiService";
import DOMPurify from "dompurify";
import "./SecondStatic.scss";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/jsonapi/block_content/w_full_block/121c2905-1aad-4a35-b001-249f99f464e1?resourceVersion=id%3A4&include=field_image`;

export default function SecondStatic() {
  const [secondStatic, setSecondStatic] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setSecondStatic(data.data);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div className="second-static row">
      <div className="second-static-col-1 col-md-6">
        <div className="second-static-col-1__title">
          <h2>{secondStatic.field_title}</h2>
        </div>
        <div className="second-static-col-1__body">
          <h3
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(secondStatic.body?.processed),
            }}
          ></h3>
        </div>
        <div className="second-static-col-1__button">
          <a
            href={secondStatic.field_link?.uri}
            target="_blank"
            rel="noopener noreferrer"
          >
            {secondStatic.field_link?.title}
          </a>
        </div>
      </div>
      <div className="second-static-col-2 col-md-6">
        <div className="second-static-col-2__image">
          <img
            src={`${host}${secondStatic.field_image?.uri?.url}`}
            alt={
              secondStatic.field_title?.replace(/(<([^>]+)>)/gi, "") ||
              "Second static image"
            }
          />
        </div>
      </div>
    </div>
  );
}
