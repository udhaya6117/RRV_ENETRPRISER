import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Landingpage from "./components/Landingpage/Landingpage";
import { ROUTINGDATA } from "./ROUTINGDATA";
import Landingpagecontent from "./components/Landingpage/Landingpagecontent";
import Landingpagehome from "./components/Landingpage/Landingpagehome";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path={ROUTINGDATA.LAND} element={<Landingpage />}>
            <Route
              path={ROUTINGDATA.LANDINGPAGECONTENT}
              element={<Landingpagecontent />}
            />
            <Route
              path={ROUTINGDATA.LANDINGPAGEHOME}
              element={<Landingpagehome />}
            />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
