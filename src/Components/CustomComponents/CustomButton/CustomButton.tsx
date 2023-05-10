import { Button, ButtonProps } from "@mui/material";
import "./CustomButton.css";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
}

function CustomButton({ children, ...rest }: CustomButtonProps): JSX.Element {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{ height: 30, bgcolor: "rgb(0, 149, 246)" }}
      disableRipple
      {...rest}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
