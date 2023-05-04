import axios from "axios";
import { apiConfig } from "../utils/apiConfig";
import { UserForm, UserSchema } from "../models/UserModel";
import { store } from "../lib/store";
import { login } from "../lib/authSlice";

class AuthService {
  private registerEndpoint = "/register";
  private loginEndpoint = "/login";

  async register(user: UserForm): Promise<number> {
    const { data, status } = await axios.post<string>(
      apiConfig.BASE_URL + this.registerEndpoint,
      user,
      {
        withCredentials: true,
      }
    );
    store.dispatch(login(data));
    return status;
  }

  async login(credentials: UserSchema) {
    const { data } = await axios.post<string>(
      apiConfig.BASE_URL + this.loginEndpoint,
      credentials,
      {
        withCredentials: true,
      }
    );
    store.dispatch(login(data));
  }
}

export const authService = new AuthService();
