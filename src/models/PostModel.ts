import { z } from "zod";

export interface PostModel {
  postImg: number;
  text?: string;
  userId: number;
  likes: number;
  isLiked: boolean;
  createdAt: Date;
  location?: string;
}

export const postSchema = z.object({
  postImg: z.instanceof(FileList),
  text: z.string().max(700, "Post text is limited to 700 chars").optional(),
  location: z.string().max(45, "Location is limited to 45 chars"),
});

export type PostForm = z.infer<typeof postSchema>;
