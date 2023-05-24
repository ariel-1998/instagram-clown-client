import {
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  styled,
  useTheme,
} from "@mui/material";
import { FaFacebookMessenger, FaRegPlusSquare } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import "./Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import CustomModal from "../../CustomComponents/CustomModal/CustomModal";
import { useState } from "react";
import CreatePost from "../../PostsArea/CreatePost/CreatePost";
import CustomTypo from "../../CustomComponents/CustomTypo";

const MyListItem = styled(ListItem)({
  padding: 2,
  "&:hover": {
    borderRadius: "50px",
  },
});

const MyListItemIcon = styled(ListItemIcon)({
  gap: 10,
  alignItems: "center",
});

function Navbar(): JSX.Element {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { typography } = useTheme();

  const homeFont =
    pathname === "/" ? typography.fontWeightBold : typography.fontWeightMedium;

  const messagesFont =
    pathname === "/messages"
      ? typography.fontWeightBold
      : typography.fontWeightMedium;
  return (
    // <Box
    //   className={"navbar"}
    //   sx={{
    //     display: "flex",
    //     flexDirection: "row",
    //     flexBasis: "15%",
    //     backgroundColor: "yellow",
    //   }}
    // >
    //   <Box sx={{ mt: "35px", flex: 1 }}>
    //     <Typography component={"h3"} sx={{ textAlign: "center", mb: "20px" }}>
    //       <Link to={"/"}>Mini-instagram</Link>
    //     </Typography>

    //     <NavLink className="nav-link" to={"/"}>
    //       <CustomMenuItem itemName="Home">
    //         <AiFillHome color={homeColor} />
    //       </CustomMenuItem>
    //     </NavLink>

    //     <NavLink className="nav-link" to="/messages">
    //       <CustomMenuItem itemName="Messages">
    //         {/**need to change messages to the number there are in DB */}
    //         <Badge badgeContent={17} color="error">
    //           <FaFacebookMessenger color={messagesColor} />
    //         </Badge>
    //       </CustomMenuItem>
    //     </NavLink>

    //     <Box className="nav-link">
    //       <CustomModal
    //         sx={{ height: "400px" }}
    //         isOpen={isOpen}
    //         setIsOpen={setIsOpen}
    //       >
    //         <CustomMenuItem
    //           itemName="Create"
    //           onClick={() => {
    //             setIsOpen(true);
    //           }}
    //         >
    //           <FiPlusSquare />
    //         </CustomMenuItem>
    //         <CreatePost />
    //       </CustomModal>
    //     </Box>
    //   </Box>

    //   <Divider
    //     sx={{ alignSelf: "flex-end" }}
    //     orientation="vertical"
    //     color={"black"}
    //   />
    // </Box>

    <List>
      <CustomTypo variant="h3" padding={4} pt={3}>
        <Link to="/" className="link">
          Mini Instagram
        </Link>
      </CustomTypo>
      <Stack direction={"column"} gap={1} width={"90%"} margin={"auto"}>
        <MyListItem>
          <ListItemButton
            sx={{ borderRadius: "50px" }}
            component={NavLink}
            to="/"
          >
            <MyListItemIcon>
              <AiFillHome size={25} />
              <CustomTypo variant="h6" fontWeight={homeFont}>
                Home
              </CustomTypo>
            </MyListItemIcon>
          </ListItemButton>
        </MyListItem>

        <MyListItem>
          <ListItemButton
            sx={{ borderRadius: "50px" }}
            component={NavLink}
            to="/messages"
          >
            <MyListItemIcon>
              <FaFacebookMessenger size={25} />
              <CustomTypo variant="h6" fontWeight={messagesFont}>
                Messages
              </CustomTypo>
            </MyListItemIcon>
          </ListItemButton>
        </MyListItem>

        <MyListItem>
          <CustomModal
            sx={{ height: "400px" }}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <ListItemButton
              sx={{ borderRadius: "50px" }}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <MyListItemIcon>
                <FaRegPlusSquare size={25} />
                <CustomTypo variant="h6">Create</CustomTypo>
              </MyListItemIcon>
            </ListItemButton>
            <CreatePost />
          </CustomModal>
        </MyListItem>
      </Stack>
    </List>
  );
}

export default Navbar;
