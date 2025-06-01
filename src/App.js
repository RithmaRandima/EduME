import "./App.css";
import Header from "./components/common/Heading/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import CourcesHome from "./components/allcources/CourcesHome";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/cources" exact component={CourcesHome} />
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>{" "}
          */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
