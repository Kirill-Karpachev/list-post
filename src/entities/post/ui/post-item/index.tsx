import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { IPostItem } from "../../model";

import { Button } from "@mui/material";

import styles from "./index.module.scss";

export const PostItem: FC<IPostItem> = ({ post, type }): JSX.Element => {
  const navigate = useNavigate();

  const goPost = (id: number) =>
    type === "view" ? navigate(`/${id}`) : navigate(`/`);
  return (
    <>
      <h2 className={styles.post_item__title}>
        {post?.id}. {post?.title}
      </h2>
      <p className={styles.post_item__text}>{post.body}</p>

      <Button variant="contained" onClick={() => goPost(post.id)}>
        {type === "view" ? "Просмотр" : "Назад"}
      </Button>
    </>
  );
};
