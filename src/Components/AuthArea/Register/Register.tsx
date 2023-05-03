import { useForm } from "react-hook-form";
import "./Register.css";
import { UserForm, UserSchema, userSchema } from "../../../models/UserModel";
import { authService } from "../../../services/authService";
import { notifyService } from "../../../services/notifyService";
import { Box, Button, CircularProgress } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { zodResolver } from "@hookform/resolvers/zod";
import { OutlinedInput } from "@mui/material";
import { useRef, useState } from "react";
import CustomFormGroup from "../../CustomComponents/CustomFormGroup/CustomFormGroup";

function Register(): JSX.Element {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (data: UserSchema) => {
    console.log(data);
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    formData.append("aboutMe", data.aboutMe ?? "");
    data.profileImg?.[0] && formData.append("profileImg", data.profileImg[0]);

    try {
      const dat = await authService.register(formData as UserForm);
      notifyService.success(dat);
    } catch (error) {
      notifyService.error(error);
    }
  };

  return (
    <>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Register</h3>
        <label>Username:</label>
        <input type="text" {...register("username")} />
        <br />
        <label>Password:</label>
        <input type="password" {...register("password")} />
        <br />
        <label>About me:</label>
        <input type="text" {...register("aboutMe")} />
        <br />
        <label>Profile Image:</label>
        <input type="file" {...register("profileImg")} />
        <br />

         <LoadingButton
        loading={false}
        variant="contained"
        loadingIndicator={<CircularProgress color="inherit" size={16} />}
      >
        Submit
      </LoadingButton>
      <br />
      <OutlinedInput className="what" type={show ? "text" : "password"} /> 
      </form> */}
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomFormGroup
            type={"text"}
            label={"username"}
            register={{ ...register("username") }}
            errors={errors}
          />
          <CustomFormGroup
            type="password"
            label={"password"}
            register={{ ...register("password") }}
            errors={errors}
          />
          <CustomFormGroup
            type={"text"}
            label={"about me"}
            register={{ ...register("aboutMe") }}
            errors={errors}
          />
          <CustomFormGroup
            type={"file"}
            register={{ ...register("profileImg") }}
            errors={errors}
          />
          <br />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
}

export default Register;
