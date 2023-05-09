import { MenuItem, IconButton, Badge, Typography } from "@mui/material";
import { FaFacebookMessenger } from "react-icons/fa";
import "./CustomMenuItem.css";
import { ReactNode } from "react";

interface CustomMenuItemProps {
  children: ReactNode;
  itemName?: string;
}

function CustomMenuItem({
  children,
  itemName,
}: CustomMenuItemProps): JSX.Element {
  return (
    <MenuItem className="menu-item">
      {/** in phones iconButton should be small */}
      <IconButton size="medium" color="inherit" disableRipple>
        {children}
      </IconButton>
      <Typography component={"p"}>{itemName}</Typography>
    </MenuItem>
  );
}

export default CustomMenuItem;
