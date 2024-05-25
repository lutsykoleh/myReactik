import React from "react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [BackToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="back-to-top">
      <button onClick={scrollUp}>Back to Top</button>{" "}
    </div>
  );
}
