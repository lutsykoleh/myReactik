import { useState, useEffect } from "react";
import { fetchData } from "/src/services/apiService";
import DOMPurify from "dompurify";
import "./Teaser.scss";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/blog-articles-first?_format=json`;

function ImportantTeaserBlock() {
  const [importantTeaser, setImportantTeaser] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setImportantTeaser(data[0]);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div className="important-teaser-block col-lg-6 col-md-12">
      <div className="important-teaser">
        <div className="important-teaser-row row">
          <div className="important-teaser-col-1 col-lg-12 col-md-6">
            <div className="important-teaser-image">
              <img
                src={`${host}${importantTeaser.field_image_1}`}
                alt={
                  importantTeaser.title_1?.replace(/(<([^>]+)>)/gi, "") ||
                  "Important Teaser image"
                }
              ></img>
            </div>
          </div>
          <div className="important-teaser-col-2 col-lg-12 col-md-6">
            <div className="important-teaser-date">
              <p>{importantTeaser.field_date}</p>
            </div>
            <div className="important-teaser-title">
              <h3>{importantTeaser.title_1}</h3>
            </div>
            <div className="important-teaser-body">
              <h3
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(importantTeaser.body),
                }}
              ></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportantTeaserBlock;
