import React, { FC } from "react";
import Count from "./Count";
import Button from "./Button";
import Other from "./Other";

interface Props {
  count: number;
  setCount: Function;
}
const Presentational: FC<Props> = ({ count, setCount }: Props) => {
  console.log("presentational");
  const data = React.useMemo(
    () => ({
      test: "test",
    }),
    []
  );
  const normalVariable = "normalVariable";
  return (
    <div>
      <h4>presentational</h4>
      <Count count={count} />
      <Button setCount={setCount} />
      <Other data={data} normalVariable={normalVariable} />
    </div>
  );
};

export default Presentational;
