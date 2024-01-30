import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import NavBarCode from "./NavBarCode";
import MyFooterCode from "./MyFooterCode";
import WelcomePageCode from "./WelcomePageCode";
import AllTheBooks from "./AllTheBooks";

function App() {
  return (
    <div className="main-content">
      <div className="content-wrap">
        <NavBarCode />
        <WelcomePageCode subtitle="Esplora la nostra vasta collezione di libri fantasy!" />
        <AllTheBooks />
      </div>
      <MyFooterCode />
    </div>
  );
}

export default App;
