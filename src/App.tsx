import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Memo from "./components/Memo";
import Container from "./components/Container";
import Context from "./components/Context";
import Redux from "./components/Redux";
import CustomHook from "./components/CustomHook";
import NestedRouter from "./components/NestedRouter";
import Jsx from "./components/Jsx";
import Transition from "./components/Transition";

function App() {
  return (
    <div className="App">
      <h2>react hooks training</h2>
      <Router>
        <Switch>
          <div>
            <div>
              <Link to="/memo">memo</Link>
              <Link to="/container">container</Link>
            </div>
            <Route exact path="/memo" component={Memo} />
            <Route exact path="/container" component={Container} />
            <Route exact path="/context" component={Context} />
            <Route exact path="/redux" component={Redux} />
            <Route exact path="/custom_hooks" component={CustomHook} />
            <Route path="/nested_router" component={NestedRouter} />
            <Route path="/jsx" component={Jsx} />
            <Route path="/transition" component={Transition} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
