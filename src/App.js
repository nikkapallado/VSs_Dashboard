import "./styles.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/page/Home.js";
import NavBar from "./Components/navbar.js";
import Footer from "./Components/footer.js";
import Zone from "./Components/page/Zone.js";
import Regionwise from "./Components/page/regionwise";

export default function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Zone" exact component={Zone} />{" "}
            <Route path="/Region" exact component={Regionwise} />
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}
