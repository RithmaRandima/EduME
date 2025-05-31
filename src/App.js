import "./App.css";
import Header from "./components/common/Heading/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
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
