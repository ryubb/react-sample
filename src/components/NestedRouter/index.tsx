import React, { FC, memo, useState, ReactElement } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const ComponentA = () => {
  return <p>component a</p>;
};
const ComponentB = () => {
  return <p>component b</p>;
};
const SharedComponent = memo(() => {
  const { url } = useRouteMatch();
  console.log("re-render??");
  return (
    <div>
      <div>Share component</div>
      <div>
        <Link to={`${url}/component_a`}>to component a</Link>
        <Link to={`${url}/component_b`}>to component b</Link>
      </div>
    </div>
  );
});

interface Props {}
const NestedRouter: FC<Props> = (props: Props) => {
  const { path } = useRouteMatch();
  const [value, setValue] = useState<number>(0);
  return (
    <>
      <h4>nested router component</h4>
      <SharedComponent />
      <p>value is {value}</p>
      <button onClick={() => setValue(value + 1)}>set value</button>
      <Router basename="/nested_router">
        <Route exact path={`/component_a`}>
          <ComponentA />
        </Route>
        <Route exact path={`/component_b`}>
          <ComponentB />
        </Route>
      </Router>
    </>
  );
};

export default NestedRouter;
