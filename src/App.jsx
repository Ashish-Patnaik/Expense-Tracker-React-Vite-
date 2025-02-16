import { useState } from "react";
import { GlobalProvider } from "./context/GlobalState"; // Correct import
import Header from "./components/Header";
import Balance from "./components/Balance";
import Incomexp from "./components/Incomexp";
import Trans from "./components/Trans";
import Add from "./components/Add";
import "./App.css";
import ScrollUp from "./components/ScrollUp";
// import ScrollUp from "./components/ScrolUp";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <Incomexp />
          <Trans />
          <Add />
        </div>
        <ScrollUp />
      </div>
    </GlobalProvider>
  );
}

export default App;
