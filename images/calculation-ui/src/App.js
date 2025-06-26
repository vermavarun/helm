import "./App.css";

import Calculator from "./components/calculator/calculator";
import TopBar from "./components/topbar/topbar";
import Footer from "./components/footer/footer";
import { useEffect } from "react";


function App({ instance }) {
  return (
      <MainContent />
  );
}

export default App;

const MainContent = () => {

  let activeAccount;

  return (
    <>
    <TopBar activeAccount={activeAccount} />

      <div className="App">
        <Calculator />
      </div>
      <Footer />
    </>


  );
};
