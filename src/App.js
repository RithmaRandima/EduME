import "./App.css";
import Header from "./components/common/Heading/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import CourcesHome from "./components/allcources/CourcesHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/cources" exact component={CourcesHome} />
          <Route path="/team" exact component={Team} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/journal" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
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
