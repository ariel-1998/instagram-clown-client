import axios from "axios";
import { UserModel } from "../models/UserModel";
import { apiConfig } from "../utils/apiConfig";

class UserService {
  private suggestedEndPoint = "/users";

  async getSuggestedUsers() {
    const { data } = await axios.get<UserModel[]>(this.suggestedEndPoint, {
      withCredentials: true,
    });
    return data;
  }
}

export const userService = new UserService();
