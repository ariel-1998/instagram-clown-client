import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { UserSchema, userSchema } from "../../../models/UserModel";
import { authService } from "../../../services/authService";
import { notifyService } from "../../../services/notifyService";
import "./Login.css";
import CustomButton from "../../CustomComponents/CustomButton/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../../assets/login.jpg";
import CustomTypo from "../../CustomComponents/CustomTypo";

const LoginPage = styled("div")(({ theme }) => ({
  flex: 1,
  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 35,
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

const FormWrap = styled("div")(({ theme }) => ({
  marginTop: 40,
  marginBottom: 40,
  border: "1px solid black",
  width: "300px",
  padding: 60,
  height: 450,
  justifySelf: "start",
  [theme.breakpoints.down("md")]: {
    margin: "20px 0",
  },
}));

const Image = styled("img")(({ theme }) => ({
  display: "block",
  margin: "40px 0",
  width: "500px",
  height: "570px",
  justifySelf: "end",
  [theme.breakpoints.down("lg")]: {
    width: "410px",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

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
  const { password } = watch();

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

  const form = (
    <FormWrap>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid direction={"column"} container gap={2}>
          <CustomTypo textAlign="center" variant="h3">
            Login
          </CustomTypo>

          <TextField
            label="username"
            variant="outlined"
            type="text"
            {...register("username")}
            fullWidth
          />
          {/* {errors?.username && (
            <Typography>{errors.username.message}</Typography>
          )} */}
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
          {/* {errors?.password && (
            <Typography>{errors.password.message}</Typography>
          )} */}
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
        </Grid>
      </form>
      <CustomTypo textAlign="center" variant="body1">
        Dont have an account? <Link to={"/auth/register"}>Register now</Link>
      </CustomTypo>
    </FormWrap>
  );
  return (
    <LoginPage>
      <Image src={loginImg} />
      {form}
    </LoginPage>
  );
}

export default Login;
