import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { UserSchema, userSchema, UserForm } from "../../../models/UserModel";
import { authService } from "../../../services/authService";
import { notifyService } from "../../../services/notifyService";
import CustomFormGroup from "../../CustomComponents/CustomFormGroup/CustomFormGroup";
import "./Login.css";
import CustomButton from "../../CustomComponents/CustomButton/CustomButton";

function Login(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });
  const { username, password } = watch();

  const onSubmit = async (data: UserSchema) => {
    setIsLoading(true);
    try {
      await authService.login(data);
      //need to add redirect
    } catch (error) {
      notifyService.error(error);
    }
    setIsLoading(false);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing={2} minWidth={300}>
        <Typography
          textAlign={"center"}
          variant="h6"
          component="div"
          sx={{ p: 0 }}
        >
          Login
        </Typography>
        <CustomFormGroup
          isDirty={username}
          type={"text"}
          label={"username"}
          {...register("username")}
          errors={errors}
        />
        <Box className="relative">
          <CustomFormGroup
            isDirty={password}
            type={show ? "text" : "password"}
            autoComplete="off"
            label={"password"}
            {...register("password")}
            errors={errors}
          />

          {password && (
            <Box className="password" onClick={() => setShow((show) => !show)}>
              {show ? <FaRegEyeSlash /> : <FaRegEye />}
            </Box>
          )}
        </Box>

        <CustomButton type="submit">
          {!isLoading ? (
            "Submit"
          ) : (
            <CircularProgress size={16} sx={{ color: "#fff" }} />
          )}
        </CustomButton>
      </Stack>
    </form>
  );
}

export default Login;
