import { useState, useEffect } from "react";
import axios from "axios";

const src = "http://91.107.217.207/jsonapi/node/page";

export default function PageTitle() {
  const [pageTitle, setPageTitle] = useState(null);

  useEffect(() => {
    axios
      .get(src)
      .then((response) => {
        setPageTitle(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="pagetitle">
      {pageTitle && (
        <div className="testimonials-item">
          <h3
            dangerouslySetInnerHTML={{
              __html: pageTitle.body.processed,
            }}
          ></h3>
        </div>
      )}
    </div>
  );
}
