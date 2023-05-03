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
import { FieldErrors, UseFormRegisterReturn, useForm } from "react-hook-form";

interface CustomFormGroupProps extends InputProps {
  type: string;
  label?: string;
  register: UseFormRegisterReturn;
  errors?: FieldErrors;
}

function CustomFormGroup(
  { type, label, register, errors, ...rest }: CustomFormGroupProps,
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

  return (
    <Box component={"div"} className="CustomFormGroup">
      <FormGroup sx={{ position: "relative", bgcolor: "rgb(250, 250, 250)" }}>
        <FormControl onBlur={handleBlur}>
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
            onFocus={handleFocus}
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
