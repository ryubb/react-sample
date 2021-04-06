import React, { FC } from "react";

interface Props {
  data: { test: string };
  normalVariable: string;
}
const Other: FC<Props> = React.memo(({ data, normalVariable }: Props) => {
  console.log("other");
  return (
    <div>
      tab component {data.test} {normalVariable}
    </div>
  );
});

export default Other;
