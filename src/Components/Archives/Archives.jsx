import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { fetchData } from "/src/services/apiService";
import "./Archives.scss";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/archives?_format=json`;

export default function Archives() {
  const [archives, setArchives] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setArchives(data);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div className="archives">
      <h2 className="archives-title">ARSIP 2021</h2>
      <div className="archives-items">
        {archives.map((archivesItem, index) => {
          return (
            <div className="archives-item" key={index}>
              <div className="archives-item__date">
                <p>{archivesItem.field_date}</p>
              </div>
              <div className="archives-item__title">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(archivesItem.title_1),
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
