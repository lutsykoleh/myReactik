import React from "react";
import ImportantTeaserBlock from "./Components/Teaser/importantTeaser";
import OtherTeasers from "./Components/Teaser/otherTeasers";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="dark">
          <header className="App-header"></header>
          <main>
            <div className="row teaser-wrap">
              <ImportantTeaserBlock />
              <OtherTeasers />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
