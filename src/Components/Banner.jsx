import { useState, useEffect } from "react";
import { fetchData } from "/src/services/apiService";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/jsonapi/block_content/basic/07440139-1de0-44ab-98d8-9a7b437245db?resourceVersion=id%3A5&include=field_image`;

export default function Banner() {
  const [banner, setBanner] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setBanner(data.data);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div className="banner">
      <div className="banner__image">
        <img
          src={`${host}${banner.field_image?.uri?.url}`}
          alt={banner.alt || "Banner image"}
        />
      </div>
    </div>
  );
}
