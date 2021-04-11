import React, { useState, FC } from "react";
import { Transition } from "react-transition-group";

// カードコンポーネントに適用するStyle
const FLIP_STYLE: any = {
  // 前面⇒背面
  entering: {
    transition: "all .5s ease",
    transform: "perspective(25rem) rotateY(-180deg)",
  },
  // 背面
  entered: {
    transition: "",
    transform: "perspective(25rem) rotateY(-180deg)",
  },
  // 背面⇒前面
  exiting: {
    transition: "all .5s ease",
    transform: "perspective(25rem) rotateY(-360deg)",
  },
  // 前面
  exited: {
    transition: "",
    transform: "perspective(25rem) rotateY(0)",
  },
};

// 反転するカードコンポーネント
const FlipCard = ({ flip, flipToFront, flipToBack }: any) => {
  const [text1, setText1] = useState("Moi!");
  const [text2, setText2] = useState("Hei!");

  const callBacks = {
    onEnter: () => setText2("Hei!"),
    onEntered: () => setText2("HeiHei!"),
    onExit: () => setText1("Moi!"),
    onExited: () => setText1("MoiMoi!"),
  };

  return (
    <Transition in={flip} timeout={550} {...callBacks}>
      {(state) => (
        <div className="flip-card" style={FLIP_STYLE[state]}>
          <div className="flip-card__front" onClick={flipToBack}>
            {text1}
          </div>
          <div className="flip-card__back" onClick={flipToFront}>
            {text2}
          </div>
        </div>
      )}
    </Transition>
  );
};

const TransitionPage = () => {
  const [flip, setFlip] = useState(false);

  return (
    <div>
      <FlipCard
        flip={flip}
        flipToBack={() => setFlip(true)}
        flipToFront={() => setFlip(false)}
      />
      <button className="btn" onClick={() => setFlip(!flip)}>
        Flip to {flip ? "front" : "back"}
      </button>
    </div>
  );
};

interface Props {}
const ReactTransitionGroup: FC<Props> = (props: Props) => {
  return (
    <div>
      <h4>react transition group</h4>
      <TransitionPage />
    </div>
  );
};

export default ReactTransitionGroup;
