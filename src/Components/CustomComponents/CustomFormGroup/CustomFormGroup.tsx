import {
  FormGroup,
  FormControl,
  InputLabel,
  FormHelperText,
  InputProps,
  OutlinedInput,
  Box,
} from "@mui/material";
import "./CustomFormGroup.css";
import { ReactNode, forwardRef, useState } from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

type CustomFormGroupProps = {
  label?: string;
  errors?: FieldErrors;
  children?: ReactNode;
  isDirty?: string;
} & InputProps &
  UseFormRegisterReturn;

function CustomFormGroup(
  { label, errors, isDirty, children, ...rest }: CustomFormGroupProps,
  ref: React.Ref<HTMLInputElement>
): JSX.Element {
  const { name } = rest;
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

  let input = (
    <OutlinedInput
      inputProps={{ style: { padding: 10 } }}
      className="input"
      onFocus={isDirty ? () => null : handleFocus}
      {...rest}
      ref={ref}
    />
  );

  const errorSpan = errors?.[name] && (
    <FormHelperText>{errors[name]?.message as string}</FormHelperText>
  );

  const content = (
    <Box component={"div"} className="CustomFormGroup" sx={{ pb: 3 }}>
      <FormGroup
        sx={{
          height: "fit-content",
          position: "relative",
          bgcolor: "rgb(250, 250, 250)",
        }}
      >
        <FormControl onBlur={isDirty ? () => null : handleBlur}>
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
