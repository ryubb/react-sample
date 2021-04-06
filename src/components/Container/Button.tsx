import React, { FC } from "react";

interface Props {
  setCount: Function;
}
const Count: FC<Props> = ({ setCount }: Props) => {
  console.log("button");
  return (
    <button onClick={() => setCount((prevCount: number) => ++prevCount)}>
      button
    </button>
  );
};

export default Count;
