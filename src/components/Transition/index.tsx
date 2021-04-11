import React, { FC, useState } from "react";
import styled from "styled-components";
import clsx from "clsx";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "red",
      opacity: 1,
      transition: "opacity 1s, height 1s",
    },
    hide: {
      opacity: 0,
      height: "0px",
    },
  })
);

interface Props {}
const Transition: FC<Props> = (props: Props) => {
  const [value, setValue] = useState("A");
  const { content, hide } = useStyles();
  console.log(hide);
  return (
    <div>
      <h4>transition component</h4>
      <button onClick={() => setValue("A")}>toA</button>
      <button onClick={() => setValue("B")}>toB</button>
      <button onClick={() => setValue("C")}>toC</button>
      <p>value: {value}</p>
      <Container>
        <div className={clsx(content, { [hide]: value !== "A" })}>
          component A
        </div>
        <div className={clsx(content, { [hide]: value !== "B" })}>
          component B
        </div>
        <div className={clsx(content, { [hide]: value !== "C" })}>
          component C
        </div>
      </Container>
    </div>
  );
};

export default Transition;
