import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { PostModel } from "../../../../models/PostModel";
import "./Post.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../utils/globalVariables";
import { userService } from "../../../../services/userService";
import { forwardRef } from "react";

interface PostProps {
  post: PostModel;
}

function Post(
  { post }: PostProps,
  ref?: React.Ref<HTMLDivElement>
): JSX.Element {
  const { data: user } = useQuery(queryKeys.userData(post.userId), () =>
    userService.getSingleUser(post.userId)
  );
  //need to also bring the images for the post
  return (
    <Card ref={ref} sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
        title={user?.username}
        subheader={post.title}
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}

export default forwardRef(Post);
