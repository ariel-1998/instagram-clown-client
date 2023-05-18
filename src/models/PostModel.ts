import { z } from "zod";
import { BooleanDB } from "./UserModel";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

export interface PostModel {
  id: number;
  userId: number;
  postImg: number;
  text: string;
  title: string;
  createdAt?: Date;
  isSingleImge?: BooleanDB;
  likes: number;
  isLiked: boolean;
}

export const postSchema = z.object({
  postImg: z.instanceof(FileList),
  text: z.string().max(700, "Post text is limited to 700 chars").optional(),
  title: z.string().max(90, "Title is limited to 90 chars"),
});

export type PostForm = z.infer<typeof postSchema>;
