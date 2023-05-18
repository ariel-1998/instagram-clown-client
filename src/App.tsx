import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Components/AuthArea/Register/Register";
import GuestLayout from "./Components/GuestLayout/GuestLayout";
import Login from "./Components/AuthArea/Login/Login";
import CreatePost from "./Components/PostsArea/CreatePost/CreatePost";
import AuthedLayout from "./Components/AuthedLayout/AuthedLayout";
import Home from "./Components/Home/Home";
import Profile from "./Components/ProfileArea/Profile/Profile";
import { useEffect, useState } from "react";
import { authService } from "./services/authService";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    authService.getLogin().finally(() => setLoading(false));
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : (
    <Routes>
      <Route path="/" element={<AuthedLayout />}>
        <Route path="" element={<Home />} />
        <Route path="try" element={<Profile />} />
      </Route>
      {/* unauthorized layout */}
      <Route path="/auth" element={<GuestLayout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      {/* unauthorized layout end*/}
    </Routes>
  );
}

export default App;
