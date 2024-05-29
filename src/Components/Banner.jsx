import { useState, useEffect } from "react";
import axios from "axios";

const src =
  "http://91.107.217.207/jsonapi/block_content/basic/07440139-1de0-44ab-98d8-9a7b437245db?resourceVersion=id%3A5&include=field_image";
const host = import.meta.env.VITE_API_HOST;

export default function Banner() {
  const [banner, setBanner] = useState({});

  useEffect(() => {
    axios
      .get(src)
      .then((response) => {
        setBanner(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching the teaser:", error);
      });
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
