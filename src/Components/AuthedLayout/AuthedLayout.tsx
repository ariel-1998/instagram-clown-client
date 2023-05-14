import { Box, Grid } from "@mui/material";
import "./AuthedLayout.css";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

function AuthedLayout(): JSX.Element {
  return (
    // <Box className={"authed-layout"}>
    //   <Navbar />
    //   <Box flex={1}>
    //     <Outlet />
    //   </Box>
    // </Box>

    <Grid container width={"100vw"} height={"100vh"}>
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default AuthedLayout;
