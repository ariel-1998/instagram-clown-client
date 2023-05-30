import axios from "axios";
import { FollowModel } from "../models/FollowsModel";

const followsEndpoint = "/follows";

class FollowerService {
  async follow(followedId: number) {
    axios.post(followsEndpoint, { followedId }, { withCredentials: true });
  }

  async unfollow(followedId: number) {
    console.log(followsEndpoint);
    axios.delete(`${followsEndpoint}/${followedId}`, {
      withCredentials: true,
    });
  }
}

export const followerService = new FollowerService();
