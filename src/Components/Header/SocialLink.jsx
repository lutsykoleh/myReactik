import { useState, useEffect } from "react";
import axios from "axios";

const src =
  "http://91.107.217.207/jsonapi/block_content/social_links/da13c4ff-fea5-48e6-bedb-7ede57c8f29d?resourceVersion=id%3A2&include=field_social_links.field_icon_svg";
const host = "http://91.107.217.207";

export default function Menu() {
  const [MenuLink, setMenuLink] = useState([]);

  useEffect(() => {
    axios
      .get(src)
      .then((response) => {
        setMenuLink(response.data.data.field_social_links);
        console.log(response.data.data.field_social_links);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="social-menu">
      <ul className="social-menu__list">
        {MenuLink.map((MenuLink, index) => {
          return (
            <li className="social-menu__item" key={index}>
              <a className="social-menu__link" href={MenuLink.field_link.uri}>
                <img
                  className="social-menu__icon"
                  src={`${host}${MenuLink.field_icon_svg.uri.url}`}
                  alt="Other Article"
                ></img>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
