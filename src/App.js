import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import NavBarCode from "./Components/NavBarCode";
import MyFooterCode from "./Components/MyFooterCode";
import WelcomePageCode from "./Components/WelcomePageCode";
import BookList from "./Components/BookList";
import books from "../src/data/fantasy.json";

function App() {
  return (
    <div className="main-content">
      <div className="content-wrap">
        <NavBarCode />
        <WelcomePageCode subtitle="Esplora la nostra vasta collezione di libri fantasy! E fatti due risate sulle mie cards" />
        <BookList books={books} />
      </div>
      <MyFooterCode />
    </div>
  );
}

export default App;
