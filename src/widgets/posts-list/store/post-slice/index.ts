import { TPost } from "../../model/post.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IPostState {
  posts: TPost[];
  isLoading: boolean;
  error: string;
}

const initialState: IPostState = {
  posts: [],
  isLoading: false,
  error: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postsFetching(state) {
      state.isLoading = true;
    },
    postsFetchingSuccess(state, action: PayloadAction<TPost[]>) {
      state.posts = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    postsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
