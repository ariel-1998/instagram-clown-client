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
import SuggestedUsers from "./SuggestedUsers/SuggestedUsers";
import { useQuery } from "@tanstack/react-query";
import { postService } from "../../services/postService";
import { queryKeys } from "../../utils/globalVariables";
import Post from "../PostsArea/PostList/Post/Post";
import PostList from "../PostsArea/PostList/PostList";

function Home(): JSX.Element {
  return (
    <Box flex={1}>
      <SuggestedUsers hasPosts={true} />
      <PostList />
    </Box>
  );
}

export default Home;
