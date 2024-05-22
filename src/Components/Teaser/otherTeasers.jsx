import { useState, useEffect } from "react";
import axios from "axios";

const src = "http://91.107.217.207/blog-articles-second?_format=json";
const host = "http://91.107.217.207";

export default function OtherTeasers() {
  const [OtherTeasers, setOtherTeasers] = useState([]);

  useEffect(() => {
    axios
      .get(src)
      .then((data) => {
        setOtherTeasers(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="other-teasers-block col-lg-6 col-md-12">
      {OtherTeasers.map((OtherTeasers) => {
        return (
          <div className="other-teaser row">
            <div className="other-teaser-block-1 col-lg-5 col-md-3 col-sm-5 col-5 smnone">
              <div className="other-teaser-image">
                <img src={`${host}${OtherTeasers.field_image_1}`}></img>
              </div>
            </div>
            <div className="other-teaser-block-2 col-lg-7 col-md-9 col-sm-7 col-7">
              <div className="other-teaser-date">
                <p>{OtherTeasers.field_date}</p>
              </div>
              <div className="other-teaser-title">
                <h3>{OtherTeasers.title_1}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
