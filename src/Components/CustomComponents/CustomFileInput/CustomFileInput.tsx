import { Box, IconButton, Stack } from "@mui/material";
import "./CustomFileInput.css";
import React, { ForwardedRef, ReactNode, forwardRef, useRef } from "react";
import { RefCallBack, UseFormRegisterReturn } from "react-hook-form";
import CustomButton from "../CustomButton/CustomButton";

type CustomFileInputProps = {
  children: ReactNode;
} & UseFormRegisterReturn &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

const CustomFileInput = forwardRef<
  HTMLInputElement | undefined,
  CustomFileInputProps
>(({ children, ...rest }, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <input
        type="file"
        id="upload-file"
        style={{ display: "none" }}
        {...rest}
        ref={(e) => {
          // set the ref value for both the local ref and the one passed from the parent component
          inputRef.current = e;
          if (typeof ref === "function") {
            ref(e);
          } else if (ref) {
            ref.current = e;
          }
        }}
      />
      <Stack alignItems={"center"}>
        <Stack
          onClick={handleClick}
          position={"relative"}
          width={"fit-content"}
        >
          {children}
        </Stack>
      </Stack>
    </>
  );
});

export default CustomFileInput;
