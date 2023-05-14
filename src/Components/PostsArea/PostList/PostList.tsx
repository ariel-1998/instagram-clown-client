import { Box } from "@mui/material";
import "./PostList.css";
import { PostModel } from "../../../models/PostModel";
import Post from "./Post/Post";

function PostList(): JSX.Element {
  const posts: PostModel[] = [];
  return (
    <Box>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </Box>
  );
}

export default PostList;
