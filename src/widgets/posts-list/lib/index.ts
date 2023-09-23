import { postAPI } from "..";

export const getPosts = (pageCount: number = 1) => {
  const { data: posts, isFetching } = postAPI.useFetchAllPostsQuery({
    limit: 16,
    page: pageCount,
  });

  return { posts, isFetching };
};
