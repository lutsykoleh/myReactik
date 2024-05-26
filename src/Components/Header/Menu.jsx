import { useState, useEffect } from "react";
import axios from "axios";

const src = "http://91.107.217.207/jsonapi/menu_link_content/menu_link_content";

export default function Menu() {
  const [MenuLink, setMenuLink] = useState([]);

  useEffect(() => {
    axios
      .get(src)
      .then((response) => {
        setMenuLink(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="menu">
      <ul className="menu__list">
        {MenuLink.map((MenuLink, index) => {
          return (
            <li className="menu__item" key={index}>
              <a href="{MenuLink.link.uri}" className="menu__link">
                {MenuLink.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
