import axios from "axios";
import { apiConfig } from "../utils/apiConfig";
import { UserForm } from "../models/UserModel";

class AuthService {
  registerEndpoint = "/register";
  loginEndpoint = "/login";

  async register(user: UserForm): Promise<string> {
    const { data } = await axios.post(
      apiConfig.BASE_URL + this.registerEndpoint,
      user
    );
    return data;
  }

  login() {}
}

export const authService = new AuthService();
