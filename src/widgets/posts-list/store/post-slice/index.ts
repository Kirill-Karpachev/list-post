import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IPostState {
  pageCount: number;
}

const initialState: IPostState = {
  pageCount: 1,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postsPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
  },
});
