import { FC } from "react";
import { useParams } from "react-router-dom";
import { PostItem } from "../../entities/post";
import { LayoutItemById } from "../../shared";
import { getPosts } from "../../widgets/posts-list";

const PostPage: FC = (): JSX.Element => {
  const { id } = useParams();
  const { posts } = getPosts();
  const foundPostById = posts?.find((post) => String(post.id) === id) || null;
  console.log(foundPostById);
  return (
    <LayoutItemById>
      <PostItem post={foundPostById} type="back" />
    </LayoutItemById>
  );
};

export default PostPage;
