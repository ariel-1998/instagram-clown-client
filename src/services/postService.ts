import axios from "axios";
import { PostModel } from "../models/PostModel";

interface PostServiceQueryParams {
  pageNum: number;
  userId?: number;
}

class PostService {
  private postsEndpoint = "/posts";

  async getFollowedPosts(
    queryParams: PostServiceQueryParams
  ): Promise<PostModel[]> {
    const { data } = await axios.get(this.postsEndpoint, {
      withCredentials: true,
      params: { ...queryParams },
    });
    return data;
  }
}

export const postService = new PostService();
