import { useState, useEffect } from "react";
import { fetchData } from "/src/services/apiService";

const host = import.meta.env.VITE_API_HOST;
const src = `${host}/jsonapi/block_content/social_links/da13c4ff-fea5-48e6-bedb-7ede57c8f29d?resourceVersion=id%3A2&include=field_social_links.field_icon_svg`;

export default function SocialLink({ isMobile }) {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData(src);
        setSocialLinks(data.data.field_social_links);
      } catch (error) {}
    };

    getData();
  }, []);

  return (
    <div className="social-menu">
      <ul className="social-menu__list navbar-nav">
        {socialLinks.map((socialItem, index) => {
          return (
            <li className="social-menu__item nav-item" key={index}>
              <a className="social-menu__link" href={socialItem.field_link.uri}>
                {isMobile ? (
                  socialItem.field_link.title
                ) : (
                  <img
                    className="social-menu__icon"
                    src={`${host}${socialItem.field_icon_svg.uri.url}`}
                    alt={socialItem.field_link.title}
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
