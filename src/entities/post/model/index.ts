import { TPost } from "../../../shared";

export interface IPostItem {
  post: TPost | null;
  type: "back" | "view";
}
