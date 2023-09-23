import { FC } from "react";

export const PostItem: FC<{ index: number; style: string }> = ({
  index,
  style,
}): JSX.Element => {
  return (
    <div className={style}>
      <p>{index + 1}</p>
    </div>
  );
};
