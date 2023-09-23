import { FC, useEffect, useState } from "react";
import { PostItem } from "../../../../entities/post";
import { LayoutItem } from "../../../../shared";
import { getPosts } from "../..";

import styles from "./index.module.scss";

const List: FC = (): JSX.Element => {
  const [pageCount, setPageCount] = useState(1);
  const { posts, isFetching } = getPosts(pageCount);

  useEffect(() => {
    if (pageCount === 8) return;
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setPageCount(pageCount + 1);
      }
    };

    document.addEventListener("scroll", onScroll);
  }, [pageCount, isFetching]);

  return (
    <div className={styles.posts}>
      {posts?.map((post) => (
        <LayoutItem key={post.id}>
          <PostItem post={post} type="view" />
        </LayoutItem>
      ))}
    </div>
  );
};

export default List;
