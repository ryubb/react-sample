import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 50px;
  overflow-y: scroll;
`;
const List = ({ list }: { list: string }) => {
  console.warn("list child");
  return <p>{list}</p>;
};
const Array = ({ lists }: { lists: string[] }) => {
  console.warn("list component");
  return (
    <Wrapper>
      {lists.map((v) => (
        <List key={v} list={v} />
      ))}
    </Wrapper>
  );
};

const MemoCount = React.memo(
  ({
    count,
    callback,
    data,
  }: {
    count: number;
    callback: Function;
    data: any;
  }) => {
    callback();
    React.useEffect(() => {
      console.warn("child component MemoCount");
      return () => {
        console.error("child component MemoCount unmount");
      };
    });

    return (
      <div>
        <p>memo count</p>
        {Object.keys(data).map((v: any) => (
          <p key={v}>{data[v]}</p>
        ))}
        <p>{count}</p>
      </div>
    );
  }
);
const Count = ({ count }: { count: number }) => {
  console.log("child component Count");
  return (
    <div>
      <p>memo count</p>
      <p>{count}</p>
    </div>
  );
};

interface Props {}
const Memo: FC<Props> = (props: Props) => {
  console.log("parent component Memo");
  const [count, setCount] = React.useState(0);
  const [memoCount, setMemoCount] = React.useState(0);
  const [lists, setLists] = React.useState<string[]>([]);

  const squareArea = React.useMemo(() => {
    console.log("use memo function");
    return memoCount * memoCount;
  }, [memoCount]);
  const callback = React.useCallback(() => {
    console.log("callback parent memo to memo count");
  }, []);

  const data: any = React.useMemo(() => ({ test: "test" }), []);

  return (
    <div>
      <h3>memo test</h3>
      <div>
        <Count count={count} />
        <MemoCount data={data} count={memoCount} callback={callback} />
        <button
          onClick={() => {
            setCount((prevCount) => ++prevCount);
            data.test2 = "test2";
          }}
        >
          count clicked
        </button>
        <button onClick={() => setMemoCount((prevCount) => ++prevCount)}>
          memo count clicked
        </button>
        <div>二畳：{squareArea}</div>
        <Array lists={lists} />
        <button onClick={() => setLists(lists.concat(["new list"]))}>
          add list
        </button>
      </div>
    </div>
  );
};

export default Memo;
