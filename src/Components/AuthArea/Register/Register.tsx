import { useForm } from "react-hook-form";
import "./Register.css";
import { UserSchema, userSchema } from "../../../models/UserModel";
import { authService } from "../../../services/authService";
import { notifyService } from "../../../services/notifyService";
import {
  Box,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import CustomButton from "../../CustomComponents/CustomButton/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import CustomTypo from "../../CustomComponents/CustomTypo";

const FormWrap = styled("div")(({ theme }) => ({
  margin: "40px auto",
  border: "1px solid black",
  width: "300px",
  padding: 60,
  height: 450,
  [theme.breakpoints.down("md")]: {
    margin: "20px auto",
  },
}));

function Register(): JSX.Element {
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
  const { password } = watch();

  const onSubmit = async (data: UserSchema) => {
    setIsLoading(true);
    try {
      await authService.register(data);
      navigate("/");
      notifyService.success("Successfully created account");
    } catch (error) {
      notifyService.error(error);
      setIsLoading(false);
    }
  };

  return (
    <FormWrap>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid direction={"column"} container gap={2}>
          <CustomTypo textAlign="center" variant="h3">
            Register
          </CustomTypo>

          <TextField
            label="username"
            variant="outlined"
            type="text"
            {...register("username")}
            fullWidth
          />

          <Box className="relative">
            <TextField
              label="password"
              variant="outlined"
              type={show ? "text" : "password"}
              autoComplete="off"
              {...register("password")}
              fullWidth
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

          <CustomButton type="submit">
            {!isLoading ? (
              "Submit"
            ) : (
              <CircularProgress size={16} sx={{ color: "#fff" }} />
            )}
          </CustomButton>
        </Grid>
      </form>
      <CustomTypo textAlign="center" variant="body1">
        Already have an account? <Link to={"/auth/login"}>Login</Link>
      </CustomTypo>
    </FormWrap>
  );
}

export default Register;
