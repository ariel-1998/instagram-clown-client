import { Typography, TypographyProps, useTheme } from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import React, { ReactNode } from "react";

interface CustomTypoProps extends TypographyProps {
  children: ReactNode;
  component?: React.ElementType;
}
function CustomTypo({
  children,
  component = "p",
  ...rest
}: CustomTypoProps): JSX.Element {
  const theme = useTheme();
  return (
    <Typography
      variant="subtitle1"
      {...rest}
      component={component}
      color={theme.palette.primary.main}
    >
      {children}
    </Typography>
  );
}

export default CustomTypo;
