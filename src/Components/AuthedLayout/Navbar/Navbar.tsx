import { Badge, Box, Divider, Typography } from "@mui/material";
import { FaFacebookMessenger } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import "./Navbar.css";
import CustomMenuItem from "../../CustomComponents/CustomMenuItem/CustomMenuItem";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar(): JSX.Element {
  const location = useLocation();

  const homeColor = location.pathname === "/home" ? "inherit" : "blue";
  const messagesColor = location.pathname === "/messages" ? "inherit" : "blue";
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
      <Box sx={{ mt: "50px", width: "90%" }}>
        <Typography component={"h3"}>
          <Link to={"/home"}>Instagram-clown</Link>
        </Typography>

        <NavLink to={"/home"} className={"nav-linl"}>
          <CustomMenuItem itemName="Home">
            <AiFillHome color={homeColor} />
          </CustomMenuItem>
        </NavLink>

        <NavLink to="/messages">
          <CustomMenuItem itemName="Messages">
            {/**need to change messages to the number there are in DB */}
            <Badge badgeContent={17} color="error">
              <FaFacebookMessenger color={messagesColor} />
            </Badge>
          </CustomMenuItem>
        </NavLink>
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
