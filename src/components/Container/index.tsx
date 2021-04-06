import React, { FC } from "react";
import Presentational from "./Presentational";

interface Props {}
const Container: FC<Props> = (props: Props) => {
  const [count, setCount] = React.useState(0);
  console.log("Container");
  return <Presentational count={count} setCount={setCount} />;
};

export default Container;
