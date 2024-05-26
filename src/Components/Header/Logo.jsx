import { useState, useEffect } from "react";
import axios from "axios";

const src =
  "http://91.107.217.207/jsonapi/block_content/basic/d6ee7696-ee2d-47f1-a4ba-c6b6a2ac583c?resourceVersion=id%3A1&include=field_image";
const host = "http://91.107.217.207";

export default function Header() {
  const [Logo, setLogo] = useState({});

  useEffect(() => {
    axios
      .get(src)
      .then((response) => {
        setLogo(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching the teaser:", error);
      });
  }, []);

  return (
    <div className="logo">
      <div className="logo__image">
        <img
          src={`${host}${Logo.field_image?.uri?.url}`}
          alt={Logo.alt || "Logo image"}
        />
      </div>
    </div>
  );
}