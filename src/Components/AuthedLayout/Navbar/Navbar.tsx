import { Badge, Box, Divider, Typography } from "@mui/material";
import { FaFacebookMessenger } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import "./Navbar.css";
import CustomMenuItem from "../../CustomComponents/CustomMenuItem/CustomMenuItem";
import { Link, NavLink, useLocation } from "react-router-dom";
import CustomModal from "../../CustomComponents/CustomModal/CustomModal";
import { useState } from "react";
import CreatePost from "../../PostsArea/CreatePost/CreatePost";

function Navbar(): JSX.Element {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const homeColor = location.pathname === "/home" ? "blue" : "inherit";
  const messagesColor = location.pathname === "/messages" ? "blue" : "inherit";
  return (
    <Box
      className={"navbar"}
      sx={{
        display: "flex",
        flexDirection: "row",
        flexBasis: "15%",
        backgroundColor: "yellow",
      }}
    >
      <Box sx={{ mt: "35px", flex: 1 }}>
        <Typography component={"h3"} sx={{ textAlign: "center", mb: "20px" }}>
          <Link to={"/"}>Mini-instagram</Link>
        </Typography>

        <NavLink className="nav-link" to={"/"}>
          <CustomMenuItem itemName="Home">
            <AiFillHome color={homeColor} />
          </CustomMenuItem>
        </NavLink>

        <NavLink className="nav-link" to="/messages">
          <CustomMenuItem itemName="Messages">
            {/**need to change messages to the number there are in DB */}
            <Badge badgeContent={17} color="error">
              <FaFacebookMessenger color={messagesColor} />
            </Badge>
          </CustomMenuItem>
        </NavLink>

        <Box className="nav-link">
          <CustomModal
            sx={{ height: "400px" }}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <CustomMenuItem
              itemName="Create"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <FiPlusSquare />
            </CustomMenuItem>
            <CreatePost />
          </CustomModal>
        </Box>
      </Box>

      <Divider
        sx={{ alignSelf: "flex-end" }}
        orientation="vertical"
        color={"black"}
      />
    </Box>
  );
}

export default Navbar;
