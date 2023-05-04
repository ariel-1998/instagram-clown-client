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
import { forwardRef, useState } from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

interface CustomFormGroupProps extends InputProps {
  type: string;
  label?: string;
  register: UseFormRegisterReturn;
  errors?: FieldErrors;
  isDirty?: string;
}

function CustomFormGroup(
  { type, label, register, errors, isDirty, ...rest }: CustomFormGroupProps,
  ref: React.Ref<HTMLInputElement>
): JSX.Element {
  const { name } = register;

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    console.log(isDirty);

    setFocused(true);
    console.log(isDirty);
  };

  const handleBlur = () => {
    console.log(isDirty);
    setFocused(false);
    console.log(isDirty);
  };

  return (
    <Box component={"div"} className="CustomFormGroup">
      <FormGroup sx={{ position: "relative", bgcolor: "rgb(250, 250, 250)" }}>
        <FormControl
          onBlur={!isDirty && type !== "file" ? handleBlur : () => null}
        >
          {label && (
            <InputLabel
              sx={{
                top: focused ? 0 : "50%",
                left: 50,
                transform:
                  (focused &&
                    "translate(0, 1.5px) translateX(-50%) scale(0.65)") ||
                  "translate(-50%, -50%)",
                transition: "all 0.2s ease-in-out",
              }}
            >
              {label}
            </InputLabel>
          )}
          <OutlinedInput
            className="input"
            sx={{ padding: 0 }}
            onFocus={!isDirty && type !== "file" ? handleFocus : () => null}
            type={type}
            {...register}
            {...rest}
          />
        </FormControl>
      </FormGroup>
      {errors?.[name] && (
        <FormHelperText>{errors[name]?.message as string}</FormHelperText>
      )}
    </Box>
  );
}

export default forwardRef(CustomFormGroup);
