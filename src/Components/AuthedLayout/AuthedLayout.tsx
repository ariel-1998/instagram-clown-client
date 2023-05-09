import { Box } from "@mui/material";
import "./AuthedLayout.css";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

function AuthedLayout(): JSX.Element {
  return (
    <Box className={"authed-layout"}>
      <Navbar />
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default AuthedLayout;
