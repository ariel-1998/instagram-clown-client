import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";
import "./CustomFormGroup.css";
import { forwardRef } from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

interface CustomFormGroupProps {
  type: string;
  label?: string;
  register: UseFormRegisterReturn;
  errors?: FieldErrors;
}

function CustomFormGroup(
  { type, label, register, errors }: CustomFormGroupProps,
  ref: React.Ref<HTMLInputElement>
): JSX.Element {
  const { name } = register;
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <Input type={type} {...register} />
      {errors?.[name] && (
        <FormHelperText>{errors[name]?.message as string}</FormHelperText>
      )}
    </>
  );
}

export default forwardRef(CustomFormGroup);
