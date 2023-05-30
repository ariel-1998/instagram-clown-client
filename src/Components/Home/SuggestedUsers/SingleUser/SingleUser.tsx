import "./SingleUser.css";
import { UserModel } from "../../../../models/UserModel";
import {
  ListItem,
  Stack,
  Avatar,
  Typography,
  Card,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import CustomButton from "../../../CustomComponents/CustomButton/CustomButton";
import CustomTypo from "../../../CustomComponents/CustomTypo";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { followerService } from "../../../../services/followerService";
import { notifyService } from "../../../../services/notifyService";
import { queryKeys } from "../../../../utils/globalVariables";
import { userService } from "../../../../services/userService";
import { useState } from "react";
import { apiConfig } from "../../../../utils/apiConfig";

interface SingleUserProps {
  user: UserModel;
  hasPosts: boolean;
  onFollow: (userId: number) => void;
}

function SingleUser({
  user,
  hasPosts,
  onFollow,
}: SingleUserProps): JSX.Element {
  const [img, setImg] = useState("");

  useQuery(
    queryKeys.userProfileImg(user?.profileImg),
    () => userService.getUserProfileImg(user?.profileImg || ""),
    { onSuccess: (data) => setImg(URL.createObjectURL(data)) }
  );

  const followMutation = useMutation({
    mutationFn: user.isfollowed
      ? followerService.unfollow
      : followerService.follow,
    onError: (e) => notifyService.error(e),
    onSuccess: () => onFollow(user.id),
  });

  const followClick = (userId: number) => {
    followMutation.mutate(userId);
  };

  const linkClass = hasPosts ? "flex-row" : "";
  const classes = hasPosts
    ? {
        flexDirection: "column",

        maxWidth: 200,
      }
    : {};
  return (
    <ListItem
      disablePadding
      sx={{ px: 1, py: 0.5, placeContent: "space-between", ...classes }}
    >
      <Link
        to={`users/${user.id}`}
        className={`link profile-img-link ${linkClass}`}
      >
        <Avatar sx={{ width: 50, height: 50 }} src={img} />
        <ListItemText sx={{ px: 2 }} primary={user.username} />
      </Link>
      <CustomButton
        sx={{ width: 90, height: 33 }}
        onClick={() => followClick(user.id)}
      >
        {user.isfollowed ? "Following" : "follow"}
      </CustomButton>
    </ListItem>
  );
}

export default SingleUser;
