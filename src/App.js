import Navbar from "./components/layout/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/layout/Dashboard.js";
import "./App.css";
import backgroundimage from "./pattern.png";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Pokemon from "./components/pokemon/Pokemon.js";

function App() {
  return (
    <Router>
      <div className="App" style={{ background: `url(${backgroundimage})` }}>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:name" component={Pokemon} />
            <Dashboard />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
