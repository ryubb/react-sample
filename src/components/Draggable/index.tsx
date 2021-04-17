import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

import GridLayout, { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-grid-layout/css/styles.css";

const SampleComponent = styled.div`
  border: 1px solid red;
`;

const initialLayouts: Layout[] = [
  // top
  { i: "a", x: 0, y: 0, w: 8, h: 12 },
  { i: "b", x: 8, y: 0, w: 4, h: 4 },
  { i: "c", x: 8, y: 4, w: 4, h: 4 },

  // bottom
  { i: "d", x: 5, y: 5, w: 5, h: 5 },
  { i: "e", x: 5, y: 9, w: 5, h: 2 },
  { i: "f", x: 5, y: 11, w: 2, h: 2 },
];

interface Props {}
const Draggable: FC<Props> = (props: Props) => {
  const [loaded, setLoaded] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [layouts, setLayouts] = useState<Layout[]>(initialLayouts);

  const state = {
    cols: 12,
    rowHeight: 30,
  };

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const getLayouts = async (): Promise<void> => {
    const layouts = await localStorage.getItem("layouts");

    if (layouts) {
      setLayouts(JSON.parse(layouts));
    }
  };

  useEffect(() => {
    getLayouts();
    setLoaded(true);
  }, []);

  const handleChangeLayouts = async (layouts: Layout[]) => {
    // check initialLayouts !== layouts ??
    if (loaded) {
      setLayouts(layouts);
      await localStorage.setItem("layouts", JSON.stringify(layouts));
    }
  };

  return (
    <div>
      <h4>draggable component</h4>
      <GridLayout
        className="layout"
        layout={layouts}
        cols={state.cols}
        rowHeight={state.rowHeight}
        width={width}
        onLayoutChange={(layouts) => {
          handleChangeLayouts(layouts);
        }}
      >
        <div
          key="a"
          style={{
            border: "solid",
            backgroundColor: "#EEEEEE",
            textAlign: "center",
          }}
        >
          <SampleComponent>A</SampleComponent>
        </div>
        <div
          key="b"
          style={{
            border: "solid",
            backgroundColor: "#EEEEEE",
            textAlign: "center",
          }}
        >
          <SampleComponent>B</SampleComponent>
        </div>
        <div
          key="c"
          style={{
            border: "solid",
            backgroundColor: "#EEEEEE",
            textAlign: "center",
          }}
        >
          <SampleComponent>C</SampleComponent>
        </div>
        <div
          key="d"
          style={{
            border: "solid",
            backgroundColor: "#EEEEEE",
            textAlign: "center",
          }}
        >
          <SampleComponent>D</SampleComponent>
        </div>
        <div
          key="e"
          style={{
            border: "solid",
            backgroundColor: "#EEEEEE",
            textAlign: "center",
          }}
        >
          <SampleComponent>E</SampleComponent>
        </div>
        <div
          key="f"
          style={{
            border: "solid",
            backgroundColor: "#EEEEEE",
            textAlign: "center",
          }}
        >
          <SampleComponent>F</SampleComponent>
        </div>
      </GridLayout>
    </div>
  );
};

export default Draggable;
