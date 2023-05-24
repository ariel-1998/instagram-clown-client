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
import SuggestedUsers from "./SuggestedUsers/SuggestedUsers";

function Home(): JSX.Element {
  return (
    <Box flex={1}>
      <SuggestedUsers hasPosts={false} />
    </Box>
  );
}

export default Home;
