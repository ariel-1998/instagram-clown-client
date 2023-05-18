import "./CreatePost.css";
import CustomButton from "../../CustomComponents/CustomButton/CustomButton";
import CustomFormGroup from "../../CustomComponents/CustomFormGroup/CustomFormGroup";
import { useForm } from "react-hook-form";
import CustomFileInput from "../../CustomComponents/CustomFileInput/CustomFileInput";
import { PostForm, postSchema } from "../../../models/PostModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";

function CreatePost(): JSX.Element {
  const { register } = useForm<PostForm>({
    resolver: zodResolver(postSchema),
  });

  return (
    <form>
      <Typography color="gray" variant="h6" component={"div"}>
        Add post
      </Typography>

      <CustomFileInput {...register("postImg")}>
        <CustomButton>click</CustomButton>
      </CustomFileInput>

      <CustomFormGroup autoComplete="off" {...register("text")} />

      <CustomFormGroup autoComplete="off" {...register("location")} />
    </form>
  );
}

export default CreatePost;
