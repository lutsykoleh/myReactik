import React from "react";
import ImportantTeaserBlock from "./Components/Teaser/importantTeaser";
import OtherTeasers from "./Components/Teaser/otherTeasers";
import FirstSlider from "./Components/FirstSlider/FirstSlider";
import FirstStatic from "./Components/FirstStatic/FirstStatic";
import EditorChoise from "./Components/EditorChoise/EditorChoise";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <div className="dark-type-1">
            <div className="row teaser-wrap">
              <ImportantTeaserBlock />
              <OtherTeasers />
            </div>
          </div>
          <div className="whitearea">
            <FirstSlider />
          </div>
          <div className="dark-type-2">
            <FirstStatic />
          </div>
          <div className="whitearea">
            <EditorChoise />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
