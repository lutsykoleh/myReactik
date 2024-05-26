import React from "react";
import Header from "./Components/Header/Header";
import ImportantTeaserBlock from "./Components/Teaser/ImportantTeaser";
import OtherTeasers from "./Components/Teaser/OtherTeasers";
import FirstSlider from "./Components/FirstSlider/FirstSlider";
import FirstStatic from "./Components/FirstStatic/FirstStatic";
import EditorChoise from "./Components/EditorChoise/EditorChoise";
import SecondStatic from "./Components/SecondStatic/SecondStatic";
import LatestArticle from "./Components/LatestArticle/LatestArticle";
import IndustialDesign from "./Components/IndustrialDesign/IndustrialDesign";
import OtherArticles from "./Components/OtherArticles/OtherArticles";
import Archives from "./Components/Archives/Archives";
import Banner from "./Components/Banner";
import Testimonials from "./Components/Testimonials/Testimonials";
import BackToTop from "./Components/BackToTop";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Header />
        </header>
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
            <div className="row">
              <div className="col-lg-8">
                <OtherArticles />
              </div>
              <div className="col-lg-4">
                <Archives />
                <Banner />
                <Testimonials />
              </div>
            </div>
          </div>
          <BackToTop />
        </main>
      </div>
    </div>
  );
}

export default App;
