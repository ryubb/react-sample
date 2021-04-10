import React, { FC } from "react";
import useSample from "../hooks/useSample";

interface Props {}
const CustomHook: FC<Props> = (props: Props) => {
  const [value, handleValue, handleValue2, handleValue3] = useSample();
  return (
    <div>
      <h4>custom hook</h4>
      <p>value is : {value}</p>
      <button onClick={() => handleValue(10)}>handle value click</button>
      <button onClick={handleValue2}>handle value2 click</button>
      <button onClick={handleValue3}>handle value3 click</button>
    </div>
  );
};

export default CustomHook;
