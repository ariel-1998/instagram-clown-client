import { MenuItem, IconButton, Typography } from "@mui/material";
import "./CustomMenuItem.css";
import { ReactNode } from "react";

interface CustomMenuItemProps {
  children: ReactNode;
  itemName?: string;
  className?: string;
  onClick?: any;
}

function CustomMenuItem({
  children,
  itemName,
  className,
  onClick,
}: CustomMenuItemProps): JSX.Element {
  return (
    <MenuItem
      onClick={onClick}
      className={`menu-item ${className}`}
      sx={{ width: "90%", borderRadius: "10px" }}
    >
      {/** in phones iconButton should be small */}
      <IconButton size="medium" color="inherit" disableRipple>
        {children}
      </IconButton>
      <Typography component={"p"}>{itemName}</Typography>
    </MenuItem>
  );
}

export default CustomMenuItem;
