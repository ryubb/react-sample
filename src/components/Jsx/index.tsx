import React, { FC } from "react";

// ReactElements
const Main = <p>test</p>;

// ReactComponents
const Main: FC = () => {
  return <p>test</p>;
};

interface Props {}
const Jsx: FC<Props> = (props: Props) => {
  return (
    <div>
      <h4>JSX Learning</h4>
      <Main />
    </div>
  );
};

export default Jsx;
