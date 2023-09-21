import { FC } from "react";
import { ListChildComponentProps } from "react-window";

export const PostItem: FC<ListChildComponentProps> = ({ index, style }) => {
  return (
    <div style={style}>
      <p>{index + 1}</p>
    </div>
  );
};
