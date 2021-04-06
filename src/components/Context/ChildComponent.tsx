import React, { FC } from "react";
import GrandChildComponent from "./GrandChildComponent";

interface Props {}

const ChildComponent: FC<Props> = React.memo((props: Props) => {
  console.log("child component");
  return <GrandChildComponent />;
});

export default ChildComponent;
