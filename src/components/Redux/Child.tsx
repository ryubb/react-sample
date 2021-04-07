import React, { FC } from "react";
import { useSelector } from "react-redux";
import GrandChild from "./GrandChild";

interface Props {}
const ChildComponent: FC<Props> = (props: Props) => {
  console.log("redux children");
  const price = useSelector((state: { price: number }) => state.price);
  return (
    <div>
      tab component
      <GrandChild price={price} />
    </div>
  );
};

export default ChildComponent;
