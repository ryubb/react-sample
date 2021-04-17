import React, { FC, memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { State } from "../..";

interface Props {}
const Child2: FC<Props> = memo((props: Props) => {
  console.log("redux child2");
  const { test } = useSelector(
    (state: State) => ({ test: state.test }),
    shallowEqual
  );
  return (
    <div>
      tab component<p>test: {test}</p>
    </div>
  );
});

export default Child2;
