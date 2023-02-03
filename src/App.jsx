import "./styles.css";
import { Routes, Route } from "react-router-dom";

// components
import Nav from "./Components/Nav";
import Side from "./Components/Side";

// pages
import Kat from "./Pages/Kat";
import Hydra from "./Pages/Hydra";
import Asgard from "./Pages/Asgard";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Side />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<Kat title="Kathmandu" />} />
            <Route
              path="/Hydra"
              element={<Hydra title="Hydra" date="14-01-2022" />}
            />
            <Route path="/Asgard" element={<Asgard title="Asgard" />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
