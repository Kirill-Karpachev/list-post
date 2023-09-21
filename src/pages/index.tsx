import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import PostsPage from "./posts-page";
import PostPage from "./post-page";

const Routing: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/:id" element={<PostPage />} />
    </Routes>
  );
};

export default Routing;
