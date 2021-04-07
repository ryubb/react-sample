import React, { FC } from "react";
import { useSelector } from "react-redux";

interface Props {
  price: number;
}
const GrandChild: FC<Props> = ({ price }: Props) => {
  console.log("redux grand child");

  return <div>tab component</div>;
};

export default GrandChild;
