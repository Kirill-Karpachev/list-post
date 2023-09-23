import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAPI } from "../../widgets/posts-list/api/post-service";
// import {
//   AutoSizer,
//   InfiniteLoader,
//   List,
//   WindowScroller,
// } from "react-virtualized";
import { Button } from "@mui/material";
import styles from "./index.module.scss";

const PostsPage: FC = (): JSX.Element => {
  const [pageCount, setPageCount] = useState(1);
  const navigate = useNavigate();
  const { data: posts } = postAPI.useFetchAllPostsQuery({
    limit: 16,
    page: pageCount,
  });

  const goPost = (id: number) => navigate(`/${id}`);

  useEffect(() => {}, [pageCount]);

  const onClick = () => {
    setPageCount((pageCount) => pageCount + 1);
    console.log(pageCount);
  };

  return (
    <div className={styles.posts}>
      {posts?.map((post) => (
        <div className={styles.post_item} key={post.id}>
          <h2 className={styles.post_item__title}>
            {post?.id}. {post?.title}
          </h2>
          <p className={styles.post_item__text}>{post.body}</p>

          <Button variant="contained" onClick={() => goPost(post.id)}>
            Просмотр
          </Button>
        </div>
      ))}
      <button onClick={() => onClick()}></button>
    </div>
  );
};

export default PostsPage;
