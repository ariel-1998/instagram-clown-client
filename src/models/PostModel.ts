export interface PostModel {
  postImg: number;
  text: string;
  userId: number;
  likes: number;
  isLiked: boolean;
  createdAt: Date;
}
