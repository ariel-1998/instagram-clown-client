import {
  FormGroup,
  FormControl,
  InputLabel,
  FormHelperText,
  InputProps,
  OutlinedInput,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import "./CustomFormGroup.css";
import { ReactNode, forwardRef, useState } from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { MdAccountCircle } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";

interface CustomFormGroupProps extends InputProps {
  type: string;
  label?: string;
  register: UseFormRegisterReturn;
  errors?: FieldErrors;
  isDirty?: string;
  accept?: string;
  children?: ReactNode;
}

function CustomFormGroup(
  {
    type,
    label,
    register,
    errors,
    isDirty,
    accept,
    children,
    ...rest
  }: CustomFormGroupProps,
  ref: React.Ref<HTMLInputElement>
): JSX.Element {
  const { name } = register;

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  let inputLabel = label ? (
    <InputLabel
      component={"label"}
      sx={{
        top: focused ? 0 : "50%",
        left: 50,
        transform:
          (focused && "translate(0, 1.5px) translateX(-50%) scale(0.65)") ||
          "translate(-50%, -50%)",
        transition: "all 0.2s ease-in-out",
      }}
    >
      {label}
    </InputLabel>
  ) : null;

  let input =
    type === "file" ? (
      <>
        <IconButton
          sx={{ position: "relative", height: 80 }}
          disableFocusRipple
          disableRipple
          aria-label="upload picture"
          component="label"
        >
          <input hidden {...register} accept={accept} type="file" />
          {children}
        </IconButton>
      </>
    ) : (
      <OutlinedInput
        inputProps={{ style: { padding: 10 } }}
        className="input"
        onFocus={!isDirty ? handleFocus : () => null}
        type={type}
        {...register}
        {...rest}
      />
    );

  const errorSpan = errors?.[name] && (
    <FormHelperText>{errors[name]?.message as string}</FormHelperText>
  );

  const content = (
    <Box component={"div"} className="CustomFormGroup">
      <FormGroup
        sx={{
          height: "fit-content",
          position: "relative",
          bgcolor: type !== "file" ? "rgb(250, 250, 250)" : "inherit",
        }}
      >
        <FormControl
          onBlur={!isDirty && type !== "file" ? handleBlur : () => null}
        >
          {inputLabel}
          {input}
        </FormControl>
      </FormGroup>

      {errorSpan}
    </Box>
  );

  return content;
}

export default forwardRef(CustomFormGroup);
