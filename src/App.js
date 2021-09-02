import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Home from "./components/Home"

export default function App() {
  return (
      <Router>
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </Router>
  );
}
