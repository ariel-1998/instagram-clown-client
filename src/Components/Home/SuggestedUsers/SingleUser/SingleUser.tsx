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
import { useMutation, useQueryClient } from "react-query";
import { followerService } from "../../../../services/followerService";
import { notifyService } from "../../../../services/notifyService";
import { queryKeys } from "../../../../utils/globalVariables";

interface SingleUserProps {
  user: UserModel;
  hasPosts: boolean;
}

function SingleUser({ user, hasPosts }: SingleUserProps): JSX.Element {
  const queryClient = useQueryClient();

  const followMutation = useMutation({
    mutationFn: followerService.follow,
    onError: (e) => notifyService.error(e),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.suggestedUsers);
      //onsucess i should get user data again to make followingAmount update (from redux and not new request)
    },
  });

  const followClick = (followedId: number) => {
    followMutation.mutate(followedId);
  };
  return (
    <ListItem disablePadding sx={{ px: 2, py: 1 }}>
      <Link to={`users/${user.id}`} className="link">
        <ListItemButton>
          <Avatar src="" />
          <ListItemText sx={{ px: 2 }} primary={user.username} />
        </ListItemButton>
      </Link>
      <CustomButton
        sx={{ width: 90, height: 33 }}
        onClick={() => followClick(user.id)}
      >
        {hasPosts ? user.id : "hello"}
      </CustomButton>
    </ListItem>
  );
}

export default SingleUser;
