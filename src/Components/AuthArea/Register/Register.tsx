import { useForm } from "react-hook-form";
import "./Register.css";
import { UserForm, UserSchema, userSchema } from "../../../models/UserModel";
import { authService } from "../../../services/authService";
import { notifyService } from "../../../services/notifyService";
import { Box, Button, CircularProgress } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import CustomFormGroup from "../../CustomComponents/CustomFormGroup/CustomFormGroup";

function Register(): JSX.Element {
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
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("aboutMe", data.aboutMe ?? "");
    data.profileImg?.[0] && formData.append("profileImg", data.profileImg[0]);

    try {
      const status = await authService.register(formData as UserForm);
      if (status === 206)
        notifyService.success(
          "Welcome, there was a problem with the profile image try updating it"
        );
      else notifyService.success("Successfully created account");
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
        <CustomFormGroup
          isDirty={isDirty.aboutMe}
          type={"text"}
          label={"about me"}
          register={{ ...register("aboutMe") }}
          errors={errors}
        />
        <CustomFormGroup
          type={"file"}
          inputProps={{ accept: "image/*" }}
          register={{ ...register("profileImg") }}
          errors={errors}
        />

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

export default Register;
