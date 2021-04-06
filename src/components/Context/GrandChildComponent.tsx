import React, { FC } from "react";
import { useContext } from "react";
import { MyContext } from ".";

const GreatGrandchildComponent = React.memo(
  ({ a, handleClickA }: { a: number; handleClickA: Function }) => {
    console.log("great grand child component");
    return (
      <div>
        <p>Hi</p>
        <p>countA: {a}</p>
        {/* setBが呼ばれても、このコンポーネントはレンダリングされない */}
        <button onClick={() => handleClickA(10)}>great grand child</button>
      </div>
    );
  }
);

interface Props {}

const GrandChildComponent: FC<Props> = (props: Props) => {
  console.log("grand child component");
  const { a, handleClickA } = useContext(MyContext);
  return (
    <div>
      count: {a}
      <GreatGrandchildComponent a={a} handleClickA={handleClickA} />
    </div>
  );
};

export default GrandChildComponent;
