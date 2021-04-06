import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Memo from "./components/Memo";
import Container from "./components/Container";
import Context from "./components/Context";

function App() {
  return (
    <div className="App">
      <h2>react hooks training</h2>
      <Router>
        <Route exact path="/memo" component={Memo} />
        <Route exact path="/container" component={Container} />
        <Route exact path="/context" component={Context} />
      </Router>
    </div>
  );
}

export default App;
