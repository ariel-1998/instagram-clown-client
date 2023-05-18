import {
  Avatar,
  Box,
  Card,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import "./Home.css";
import CustomButton from "../CustomComponents/CustomButton/CustomButton";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

function Home(): JSX.Element {
  const user = useSelector((state: RootState) => state.auth);
  const listItem = (
    <ListItem disablePadding sx={{ display: "block", px: 2, py: 1 }}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack flexDirection="row" gap={2}>
          <Avatar src="" />
          <Typography variant="subtitle1">jshkua shlajshkuash</Typography>
        </Stack>
        <CustomButton
          sx={{ width: 90, height: 33 }}
          onClick={() => alert("hi")}
        >
          {user?.username || "hello"}
        </CustomButton>
      </Stack>
    </ListItem>
  );

  return (
    <List sx={{ bgcolor: "yellow", width: "100%", flex: 1 }}>
      <Box sx={{ pt: 2 }}>
        <Typography fontWeight="bold" sx={{ margin: "auto", width: "40%" }}>
          Suggested for you
        </Typography>

        <Card variant="outlined" sx={{ margin: "auto", width: "40%" }}>
          {listItem}
        </Card>
      </Box>
    </List>
  );
}

export default Home;
