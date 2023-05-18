import axios from "axios";
import { apiConfig } from "../utils/apiConfig";
import { UserModel, UserSchema } from "../models/UserModel";
import { store } from "../lib/store";
import { login, logout } from "../lib/authSlice";

class AuthService {
  private registerEndpoint = "/auth/register";
  private loginEndpoint = "/auth/login";
  private logoutEndpoint = "/auth/login";

  async register(user: UserSchema) {
    const { data } = await axios.post<UserModel>(
      apiConfig.BASE_URL + this.registerEndpoint,
      user,
      {
        withCredentials: true,
      }
    );
    store.dispatch(login(data));
  }

  async login(credentials: UserSchema) {
    const { data } = await axios.post<UserModel>(
      apiConfig.BASE_URL + this.loginEndpoint,
      credentials,
      {
        withCredentials: true,
      }
    );
    store.dispatch(login(data));
  }

  async getLogin() {
    const { data } = await axios.get<UserModel>(
      apiConfig.BASE_URL + this.loginEndpoint,
      {
        withCredentials: true,
      }
    );
    store.dispatch(login(data));
  }

  async logout() {
    await axios.delete(apiConfig.BASE_URL + this.logoutEndpoint, {
      withCredentials: true,
    });
    store.dispatch(logout());
  }
}

export const authService = new AuthService();
