import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { TPost } from "../../../shared";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<TPost[], { limit: number; page: number }>({
      query: (arg) => {
        const { limit = 12, page = 1 } = arg;
        return {
          url: "/posts",
          params: {
            _limit: limit,
            _page: page,
          },
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});
