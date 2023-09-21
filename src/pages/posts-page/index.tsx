import { FC } from "react";
import { FixedSizeList } from "react-window";

import { PostItem } from "../../entities/post";

const PostsPage: FC = (): JSX.Element => {
  return (
    <FixedSizeList
      height={400}
      width={360}
      itemSize={30}
      itemCount={200}
      overscanCount={5}
    >
      {PostItem}
    </FixedSizeList>
  );
};

export default PostsPage;
