import { useState, useEffect } from "react";
import { fetchData } from "/src/services/apiService";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/blog-articles-second?_format=json`;

export default function OtherTeasers() {
  const [otherTeasers, setOtherTeasers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setOtherTeasers(data);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div className="other-teasers-block col-lg-6 col-md-12">
      {otherTeasers.map((otherTeaserItem, index) => {
        return (
          <div className="other-teaser row" key={index}>
            <div className="other-teaser-block-1 col-lg-5 col-md-3 col-sm-5 col-5 smnone">
              <div className="other-teaser-image">
                <img
                  src={`${host}${otherTeaserItem.field_image_1}`}
                  alt={otherTeaserItem.title_1 || "Other teaser image"}
                ></img>
              </div>
            </div>
            <div className="other-teaser-block-2 col-lg-7 col-md-9 col-sm-7 col-7">
              <div className="other-teaser-date">
                <p>{otherTeaserItem.field_date}</p>
              </div>
              <div className="other-teaser-title">
                <h3>{otherTeaserItem.title_1}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
