import { useState, useEffect } from "react";
import axios from "axios";
import "./Teaser.scss";

const src = "http://91.107.217.207/blog-articles-first?_format=json";
const host = "http://91.107.217.207";

function ImportantTeaserBlock() {
  const [teaser, setTeaser] = useState({});

  useEffect(() => {
    axios
      .get(src)
      .then((data) => {
        setTeaser(data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="important-teaser-block col-lg-6 col-md-12">
      <div className="important-teaser">
        <div className="important-teaser-row row">
          <div className="important-teaser-col-1 col-lg-12 col-md-6">
            <div className="important-teaser-image">
              <img src={`${host}${teaser.field_image_1}`}></img>
            </div>
          </div>
          <div className="important-teaser-col-2 col-lg-12 col-md-6">
            <div className="important-teaser-date">
              <p>{teaser.field_date}</p>
            </div>
            <div className="important-teaser-title">
              <h3>{teaser.title_1}</h3>
            </div>
            <div className="important-teaser-body">
              <h3>{teaser.body}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportantTeaserBlock;
