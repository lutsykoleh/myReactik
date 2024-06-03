import { useState, useEffect } from "react";
import { fetchData } from "/src/services/apiService";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/jsonapi/menu_link_content/menu_link_content`;

export default function Menu() {
  const [menuLink, setMenuLink] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setMenuLink(data.data);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div className="menu">
      <ul className="menu__list navbar-nav me-auto mb-2 mb-lg-0">
        {menuLink.map((menuItem, index) => {
          return (
            <li className="menu__item nav-item" key={index}>
              <a href={menuItem.link.uri} className="menu__link active">
                {menuItem.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
