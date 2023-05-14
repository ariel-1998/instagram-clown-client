import { useForm } from "react-hook-form";
import "./Register.css";
import { UserForm, UserSchema, userSchema } from "../../../models/UserModel";
import { authService } from "../../../services/authService";
import { notifyService } from "../../../services/notifyService";
import {
  Avatar,
  Box,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material/";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import CustomFormGroup from "../../CustomComponents/CustomFormGroup/CustomFormGroup";
import CustomButton from "../../CustomComponents/CustomButton/CustomButton";
import CustomFileInput from "../../CustomComponents/CustomFileInput/CustomFileInput";

function Register(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });
  const { username, password, aboutMe } = watch();

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

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) return setImage(URL.createObjectURL(file));
    setImage("");
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
          Register
        </Typography>
        <CustomFileInput
          {...register("profileImg", {
            onChange: (e) => handleFileSelect(e),
          })}
        >
          <Box width={100} height={100}>
            <Avatar
              src={image}
              sx={{
                position: "absolute",
                height: "100%",
                width: "100%",
                "&:hover": { cursor: "pointer" },
              }}
            />
            {image.length === 0 && (
              <Add
                sx={{
                  position: "absolute",
                  width: "40%",
                  height: "40%",
                  bottom: 0,
                  right: "-8%",
                }}
              />
            )}
          </Box>
        </CustomFileInput>

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
        <CustomFormGroup
          autoComplete="off"
          isDirty={aboutMe}
          type={"text"}
          label={"about me"}
          {...register("aboutMe")}
          errors={errors}
        />

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

export default Register;
