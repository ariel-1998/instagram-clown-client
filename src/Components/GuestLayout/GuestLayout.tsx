import { Outlet } from "react-router-dom";
import "./GuestLayout.css";
import { Box, Stack, Typography } from "@mui/material";

function GuestLayout(): JSX.Element {
  return (
    <Stack minHeight={"100dvh"}>
      <Box flexGrow={1}>
        <Outlet />
      </Box>
      <Typography p={2}>
        © {new Date().getFullYear()} Instagram from Meta
      </Typography>
    </Stack>
  );
}

export default GuestLayout;
