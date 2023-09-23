import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postAPI } from "../../widgets/posts-list/api/post-service";
import { Button } from "@mui/material";

const PostPage: FC = (): JSX.Element => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: posts } = postAPI.useFetchAllPostsQuery(12);
  const foundPostById = posts?.find((post) => String(post.id) === id);

  const goBack = () => navigate(-1);

  return (
    <div>
      <div>{foundPostById?.title}</div>
      <p>{foundPostById?.body}</p>
      <Button variant="contained" onClick={goBack}>
        Назад
      </Button>
    </div>
  );
};

export default PostPage;
