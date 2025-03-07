import { useEffect, useState } from "react";
import { GlobalProvider } from "./context/GlobalState"; // Correct import
import Header from "./components/Header";
import Balance from "./components/Balance";
import Incomexp from "./components/Incomexp";
import Trans from "./components/Trans";
import Add from "./components/Add";
import "./App.css";
import ScrollUp from "./components/ScrollUp";
import Loader from "./components/Loader"; // Correct import
function App() {
  const [showimg, setShowimg] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowimg(false);
    }, 2000); // Hide the loader after 2 seconds
  }, []);
  
  return (
    <GlobalProvider>
      <div>
        {showimg ? (
          <Loader />
        ) : (
          <>
            <Header />
            <div className="container">
              <Balance />
              <Incomexp />
              <Trans />
              <Add />
            </div>
            <ScrollUp />
          </>
        )}
      </div>
    </GlobalProvider>
  );
}

export default App;
