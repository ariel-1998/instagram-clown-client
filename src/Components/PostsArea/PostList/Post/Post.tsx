import { PostModel } from "../../../../models/PostModel";
import "./Post.css";

interface PostProps {
  post: PostModel;
}

function Post({ post }: PostProps): JSX.Element {
  return <div className="Post">post</div>;
}

export default Post;
