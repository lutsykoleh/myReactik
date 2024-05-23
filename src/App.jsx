import React from "react";
import ImportantTeaserBlock from "./Components/Teaser/ImportantTeaser";
import OtherTeasers from "./Components/Teaser/OtherTeasers";
import FirstSlider from "./Components/FirstSlider/FirstSlider";
import FirstStatic from "./Components/FirstStatic/FirstStatic";
import EditorChoise from "./Components/EditorChoise/EditorChoise";
import SecondStatic from "./Components/SecondStatic/SecondStatic";
import LatestArticle from "./Components/LatestArticle/LatestArticle";
import IndustialDesign from "./Components/IndustrialDesign/IndustrialDesign";
import OtherArticles from "./Components/OtherArticles/OtherArticles";

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
          <div className="yellow-area">
            <SecondStatic />
          </div>
          <div className="whitearea">
            <LatestArticle />
          </div>
          <div className="dark-type-1">
            <IndustialDesign />
          </div>
          <div className="whitearea">
            <OtherArticles />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
