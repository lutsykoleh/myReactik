import { useState, useEffect } from "react";
import axios from "axios";
import "./FirstStatic.scss";

const src =
  "http://91.107.217.207/jsonapi/block_content/w_full_block/cf972415-4ba6-4d47-ae43-11798f4b8e2a?resourceVersion=id%3A3&include=field_image";
const host = "http://91.107.217.207";

function FirstStatic() {
  const [statics, setStatics] = useState({});

  useEffect(() => {
    axios
      .get(src)
      .then((response) => {
        setStatics(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching the teaser:", error);
      });
  }, []);

  return (
    <div className="first-static row">
      <div className="first-static-col-1 col-xl-6 col-md-6">
        <div className="first-static-col-1__title">
          <h2>{statics.field_title}</h2>
        </div>
        <div className="first-static-col-1__body">
          <h3>{statics.body?.processed}</h3>
        </div>
        <div className="first-static-col-1__button">
          <a
            href={statics.field_link?.uri}
            target="_blank"
            rel="noopener noreferrer"
          >
            {statics.field_link?.title}
          </a>
        </div>
      </div>
      <div className="first-static-col-2 col-xl-6 col-md-6">
        <div className="first-static-col-2__image">
          <img
            src={`${host}${statics.field_image?.uri?.url}`}
            alt={statics.field_title || "Teaser image"}
          />
        </div>
      </div>
    </div>
  );
}

export default FirstStatic;
