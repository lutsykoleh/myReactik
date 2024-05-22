import React from "react";
import ImportantTeaserBlock from "./Components/Teaser/importantTeaser";
import OtherTeasers from "./Components/Teaser/otherTeasers";
import FirstSlider from "./Components/FirstSlider/FirstSlider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <div className="dark">
            <div className="row teaser-wrap">
              <ImportantTeaserBlock />
              <OtherTeasers />
            </div>
          </div>
          <div className="whitearea">
            <FirstSlider />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
