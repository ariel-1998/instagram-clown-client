import axios from "axios";
import { FollowModel } from "../models/FollowsModel";

class FollowerService {
  private followsEndpoint = "/follows";

  async follow(followedId: number) {
    await axios.post(
      this.followsEndpoint,
      { followedId },
      { withCredentials: true }
    );
  }

  async unfollow({ followedId }: FollowModel) {
    await axios.delete(`${this.followsEndpoint}/${followedId}`, {
      withCredentials: true,
    });
  }
}

export const followerService = new FollowerService();
