import React, { FC } from "react";
import { createContext } from "react";
import ChildComponent from "./ChildComponent";

interface Props {}

export const MyContext = createContext({} as any);

const Context: FC<Props> = (props: Props) => {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  console.log("parent context");
  const handleClickA = React.useCallback((val: number) => setA(val), [setA]);

  return (
    <MyContext.Provider value={{ a, test: "test", handleClickA }}>
      <div>
        <h4>parent context</h4>
        <ChildComponent />
        <p>countB: {b}</p>
        <button onClick={() => setA((prev: number) => ++prev)}>button</button>
        <button onClick={() => setB((prev: number) => ++prev)}>button</button>
      </div>
    </MyContext.Provider>
  );
};

export default Context;
