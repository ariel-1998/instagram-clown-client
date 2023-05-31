import axios from "axios";
import { UserModel } from "../models/UserModel";
import { apiConfig } from "../utils/apiConfig";

class UserService {
  private suggestedEndpoint = "/users";
  private profileImgEndPoint = this.suggestedEndpoint + "/image/";

  async getSuggestedUsers(): Promise<UserModel[]> {
    const { data } = await axios.get<UserModel[]>(this.suggestedEndpoint, {
      withCredentials: true,
    });
    return data;
  }

  async getSingleUser(userId: number): Promise<UserModel> {
    const { data } = await axios.get<UserModel>(
      `${this.suggestedEndpoint}/${userId}`,
      {
        withCredentials: true,
      }
    );
    return data;
  }

  async getUserProfileImg(profileImg: string): Promise<string> {
    const { data } = await axios.get<Blob>(
      this.profileImgEndPoint + profileImg,
      {
        responseType: "blob",
        withCredentials: true,
      }
    );
    const url = URL.createObjectURL(data);
    return url;
  }
}

export const userService = new UserService();
