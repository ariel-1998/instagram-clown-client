import {
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import { FaFacebookMessenger } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import "./Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import CustomModal from "../../CustomComponents/CustomModal/CustomModal";
import { useState } from "react";
import CreatePost from "../../PostsArea/CreatePost/CreatePost";

const MyListItem = styled(ListItem)({
  padding: 0,
});

function Navbar(): JSX.Element {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const homeColor = location.pathname === "/" ? "blue" : "inherit";
  const messagesColor = location.pathname === "/messages" ? "blue" : "inherit";
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

    <Box>
      <List>
        <MyListItem>
          <ListItemButton component={NavLink} to="/">
            <ListItemIcon>
              <AiFillHome />
            </ListItemIcon>
            <Typography
              fontSize={"1.25rem"}
              color={homeColor}
              variant="subtitle1"
            >
              Home
            </Typography>
          </ListItemButton>
        </MyListItem>

        <MyListItem>
          <ListItemButton component={NavLink} to="/messages">
            <ListItemIcon>
              <FaFacebookMessenger />
            </ListItemIcon>
            <Typography
              fontSize={"1.25rem"}
              color={messagesColor}
              variant="subtitle1"
            >
              Messages
            </Typography>
          </ListItemButton>
        </MyListItem>

        <MyListItem>
          <CustomModal
            sx={{ height: "400px" }}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <ListItemButton
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <ListItemIcon></ListItemIcon>
              <Typography fontSize={"1.25rem"} variant="subtitle1">
                Add
              </Typography>
            </ListItemButton>
            <CreatePost />
          </CustomModal>
        </MyListItem>
      </List>
    </Box>
  );
}

export default Navbar;
