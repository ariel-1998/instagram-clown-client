import { IconButton } from "@mui/material";
import "./CustomFileInput.css";
import React, { ForwardedRef, ReactNode, forwardRef, useRef } from "react";
import { RefCallBack, UseFormRegisterReturn } from "react-hook-form";
import CustomButton from "../CustomButton/CustomButton";

interface CustomFileInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  register: UseFormRegisterReturn;
  children: ReactNode;
}

const CustomFileInput = forwardRef<
  HTMLInputElement | undefined,
  CustomFileInputProps
>(({ register, children, ...props }, ref) => {
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
        {...props}
        {...register}
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
      <div onClick={handleClick}>{children}</div>
      {/* <IconButton onClick={handleUploadClick}>{children}</IconButton> */}
    </>
  );
});

export default CustomFileInput;
