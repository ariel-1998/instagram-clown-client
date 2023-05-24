import { Outlet } from "react-router-dom";
import "./GuestLayout.css";
import { Box, Stack, Typography } from "@mui/material";

function GuestLayout(): JSX.Element {
  return (
    <Stack minHeight={"100dvh"}>
      <Outlet />
      <Typography flexBasis={"10%"} p={1} textAlign={"center"}>
        © {new Date().getFullYear()} Instagram from Meta
      </Typography>
    </Stack>
  );
}

export default GuestLayout;
