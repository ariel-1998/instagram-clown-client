import { useForm } from "react-hook-form";
import "./Register.css";
import { UserForm } from "../../models/UserModel";
import { authService } from "../../services/authService";
import { notifyService } from "../../services/notifyService";

function Register(): JSX.Element {
  const { register, handleSubmit } = useForm<UserForm>();

  const onSubmit = async (data: UserForm) => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <button type="submit">Send</button>
    </form>
  );
}

export default Register;
