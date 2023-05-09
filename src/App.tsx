import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Components/AuthArea/Register/Register";
import GuestLayout from "./Components/GuestLayout/GuestLayout";
import Login from "./Components/AuthArea/Login/Login";
import CreatePost from "./Components/PostsArea/CreatePost/CreatePost";
import AuthedLayout from "./Components/AuthedLayout/AuthedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<CreatePost />} />
      {/* unauthorized layout */}
      <Route path="/auth" element={<GuestLayout />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="try" element={<AuthedLayout />} />
      {/* unauthorized layout end*/}
    </Routes>
  );
}

export default App;
