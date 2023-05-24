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
    const { data } = await axios.post<UserModel>(this.registerEndpoint, user, {
      withCredentials: true,
    });
    store.dispatch(login(data));
  }

  async login(credentials: UserSchema) {
    const { data } = await axios.post<UserModel>(
      this.loginEndpoint,
      credentials,
      {
        withCredentials: true,
      }
    );
    store.dispatch(login(data));
  }

  async getLogin() {
    const { data } = await axios.get<UserModel>(this.loginEndpoint, {
      withCredentials: true,
    });
    store.dispatch(login(data));
  }

  async logout() {
    await axios.delete(this.logoutEndpoint, {
      withCredentials: true,
    });
    store.dispatch(logout());
  }
}

export const authService = new AuthService();
