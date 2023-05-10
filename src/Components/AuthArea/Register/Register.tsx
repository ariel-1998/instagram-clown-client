import { useForm } from "react-hook-form";
import "./Register.css";
import { UserForm, UserSchema, userSchema } from "../../../models/UserModel";
import { authService } from "../../../services/authService";
import { notifyService } from "../../../services/notifyService";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import CustomFormGroup from "../../CustomComponents/CustomFormGroup/CustomFormGroup";
import CustomButton from "../../CustomComponents/CustomButton/CustomButton";
import { MdAccountCircle } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";

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
          type={"file"}
          accept="image/*"
          register={{ ...register("profileImg") }}
          errors={errors}
        >
          <MdAccountCircle size={80} color={"rgb(0,0,0,0.2)"} />
          {!isDirty.profileImg?.[0] && (
            <BsPlusCircle className="plus-icon" size={28} />
          )}
        </CustomFormGroup>

        <Typography sx={{ textAlign: "center", height: 10 }} component="span">
          {isDirty.profileImg?.[0] ? "Change" : "Choose"} profile
        </Typography>

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
            autoComplete="off"
            label={"password"}
            register={{ ...register("password") }}
            errors={errors}
          />

          {isDirty.password && (
            <Box className="password" onClick={() => setShow((show) => !show)}>
              {show ? <FaRegEyeSlash /> : <FaRegEye />}
            </Box>
          )}
        </div>
        <CustomFormGroup
          autoComplete="off"
          isDirty={isDirty.aboutMe}
          type={"text"}
          label={"about me"}
          register={{ ...register("aboutMe") }}
          errors={errors}
        />

        <CustomButton type="submit">
          {!isLoading ? (
            "Submit"
          ) : (
            <CircularProgress size={16} sx={{ color: "#fff" }} />
          )}
        </CustomButton>
      </form>
    </Box>
  );
}

export default Register;
