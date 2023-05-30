import axios from "axios";
import { UserModel } from "../models/UserModel";
import { apiConfig } from "../utils/apiConfig";

class UserService {
  private suggestedEndPoint = "/users";
  private profileImgEndPoint = this.suggestedEndPoint + "/image/";

  async getSuggestedUsers() {
    const { data } = await axios.get<UserModel[]>(this.suggestedEndPoint, {
      withCredentials: true,
    });
    console.log(data);
    return data;
  }

  async getUserProfileImg(profileImg: string) {
    const { data } = await axios.get<Blob>(
      this.profileImgEndPoint + profileImg,
      {
        responseType: "blob",
        withCredentials: true,
      }
    );
    console.log(data);

    return data;
  }
}

export const userService = new UserService();
