import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { UserSchema, userSchema, UserForm } from "../../../models/UserModel";
import { authService } from "../../../services/authService";
import { notifyService } from "../../../services/notifyService";
import CustomFormGroup from "../../CustomComponents/CustomFormGroup/CustomFormGroup";
import "./Login.css";

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
  const isDirty = watch();

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
    <Box component={"div"} className="form-box">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <CustomFormGroup
          isDirty={isDirty.username}
          type={"text"}
          label={"username"}
          register={{ ...register("username") }}
          errors={errors}
        />
        <div className="relative">
          <CustomFormGroup
            isDirty={isDirty.password}
            type={show ? "text" : "password"}
            label={"password"}
            register={{ ...register("password") }}
            errors={errors}
          />

          {isDirty.password && (
            <div className="password" onClick={() => setShow((show) => !show)}>
              {show ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
          )}
        </div>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ height: 30, bgcolor: "rgb(0, 149, 246)" }}
        >
          {!isLoading ? (
            "Submit"
          ) : (
            <CircularProgress size={16} sx={{ color: "#fff" }} />
          )}
        </Button>
      </form>
    </Box>
  );
}

export default Login;
