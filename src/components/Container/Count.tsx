import React, { FC } from "react";

interface Props {
  count: number;
}
const Count: FC<Props> = ({ count }: Props) => {
  console.log("count");
  return <div>count: {count}</div>;
};

export default Count;
