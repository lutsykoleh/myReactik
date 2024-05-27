import { useState, useEffect } from "react";
import axios from "axios";

const src =
  "http://91.107.217.207/jsonapi/block_content/social_links/da13c4ff-fea5-48e6-bedb-7ede57c8f29d?resourceVersion=id%3A2&include=field_social_links.field_icon_svg";
const host = "http://91.107.217.207";

export default function SocialLink({ isMobile }) {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    axios
      .get(src)
      .then((response) => {
        setSocialLinks(response.data.data.field_social_links);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="social-menu">
      <ul className="social-menu__list navbar-nav">
        {socialLinks.map((link, index) => {
          return (
            <li className="social-menu__item nav-item" key={index}>
              <a className="social-menu__link" href={link.field_link.uri}>
                {isMobile ? (
                  link.field_link.title
                ) : (
                  <img
                    className="social-menu__icon"
                    src={`${host}${link.field_icon_svg.uri.url}`}
                    alt={link.field_link.title}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
