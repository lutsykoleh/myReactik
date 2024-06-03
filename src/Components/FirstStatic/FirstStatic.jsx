import { useState, useEffect } from "react";
import { fetchData } from "/src/services/apiService";
import DOMPurify from "dompurify";
import "./FirstStatic.scss";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/jsonapi/block_content/w_full_block/cf972415-4ba6-4d47-ae43-11798f4b8e2a?resourceVersion=id%3A3&include=field_image`;

function FirstStatic() {
  const [staticData, setStaticData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setStaticData(data.data);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div className="first-static row">
      <div className="first-static-col-1 col-md-6">
        <div className="first-static-col-1__title">
          <h2>{staticData.field_title}</h2>
        </div>
        <div className="first-static-col-1__body">
          <h3
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(staticData.body?.processed),
            }}
          ></h3>
        </div>
        <div className="first-static-col-1__button">
          <a
            href={staticData.field_link?.uri}
            target="_blank"
            rel="noopener noreferrer"
          >
            {staticData.field_link?.title}
          </a>
        </div>
      </div>
      <div className="first-static-col-2 col-md-6">
        <div className="first-static-col-2__image">
          <img
            src={`${host}${staticData.field_image?.uri?.url}`}
            alt={
              staticData.field_title?.replace(/(<([^>]+)>)/gi, "") ||
              "Static block image"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default FirstStatic;
