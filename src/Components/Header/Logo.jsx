import { useState, useEffect } from "react";
import { fetchData } from "/src/services/apiService";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/jsonapi/block_content/basic/d6ee7696-ee2d-47f1-a4ba-c6b6a2ac583c?resourceVersion=id%3A1&include=field_image`;

export default function Header() {
  const [logo, setLogo] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setLogo(data.data);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div className="logo navbar-brand">
      <div className="logo__image">
        <img
          src={`${host}${logo.field_image?.uri?.url}`}
          alt={logo.alt || "Logo image"}
        />
      </div>
    </div>
  );
}
