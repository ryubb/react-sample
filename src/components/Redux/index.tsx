import React, { FC } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import Child from "./Child";
import { State } from "../..";
import Child2 from "./Child2";

interface Props {}
const Redux: FC<State> = ({ price, test }: State) => {
  console.log("redux parent");
  const dispatch = useDispatch();

  const onClickPrice = () => {
    dispatch({ type: "ADDTAX", price: price + 2 });
  };
  const onClick = () => {
    dispatch({ type: "TEST", test: "new value" });
  };

  return (
    <div>
      <h2>redux connect and hooks sample!!</h2>
      <p>price is {price}</p>
      <p>test is {test}</p>
      <Child />
      <Child2 />
      <button onClick={onClickPrice}>price clicked!!</button>
      <button onClick={onClick}>test clicked!!</button>
    </div>
  );
};

const mapState = (state: State) => ({
  price: state.price,
  test: state.test,
});
export default connect(mapState)(Redux);
