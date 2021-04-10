import { useCallback, useState } from "react";

const useSample = (): [
  number,
  (value: number) => void,
  () => void,
  () => void
] => {
  const [value, setValue] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);
  const [value3, setValue3] = useState<number>(0);

  const handleValue = useCallback((value: number): void => {
    const newValue = value + 1;
    setValue(newValue);
  }, []);

  const handleValue2 = () => {
    setValue2(value2 + 10);
    console.log(`value2は増えているよ value2:${value2}`);
  };

  const handleValue3 = () => {
    setValue3(value3 + 10);
    console.log(`value2は増えているよ value3:${value3}`);
  };

  window.addEventListener("click", () => {
    console.log(value);
    handleValue(value);
  });

  return [value, handleValue, handleValue2, handleValue3];
};

export default useSample;
