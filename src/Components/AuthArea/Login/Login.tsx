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
import { useNavigate } from "react-router-dom";

function Login(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

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
      navigate("/");
    } catch (error) {
      notifyService.error(error);
      setIsLoading(false);
    }
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(2, 1fr)"
      gap={2}
      height={"100%"}
    >
      <p>asdas</p>
      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "max-content", height: "max-content" }}
      >
        <Box display="grid" gap={2} width={"100%"}>
          <Typography
            textAlign={"center"}
            variant="h6"
            component="div"
            sx={{ p: 0 }}
          >
            Login
          </Typography>
          <CustomFormGroup
            sx={{ width: 300 }}
            isDirty={username}
            type={"text"}
            label={"username"}
            {...register("username")}
            errors={errors}
          />
          <Box className="relative">
            <CustomFormGroup
              sx={{ width: 300 }}
              isDirty={password}
              type={show ? "text" : "password"}
              autoComplete="off"
              label={"password"}
              {...register("password")}
              errors={errors}
            />

            {password && (
              <Box
                className="password"
                onClick={() => setShow((show) => !show)}
              >
                {show ? <FaRegEyeSlash /> : <FaRegEye />}
              </Box>
            )}
          </Box>

          <CustomButton
            type="submit"
            sx={{ mt: 1, height: 30, bgcolor: "rgb(0, 149, 246)" }}
          >
            {!isLoading ? (
              "Submit"
            ) : (
              <CircularProgress size={16} sx={{ color: "#fff" }} />
            )}
          </CustomButton>
        </Box>
      </form>
    </Box>
  );
}

export default Login;
