import {
  Box,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import "./CreatePost.css";
import { RiSendPlaneFill } from "react-icons/ri";
import CustomButton from "../../CustomComponents/CustomButton/CustomButton";
import CustomFormGroup from "../../CustomComponents/CustomFormGroup/CustomFormGroup";
import Register from "../../AuthArea/Register/Register";
import { useForm } from "react-hook-form";
import { BsPlusCircle } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { isDirty } from "zod";
import CustomFileInput from "../../CustomComponents/CustomFileInput/CustomFileInput";
import { useRef } from "react";

function CreatePost(): JSX.Element {
  const { register } = useForm();
  const reff = useRef<HTMLInputElement>();
  return (
    <form>
      <h2>hello</h2>

      {/* <CustomButton>
        <CustomFormGroup
          type={"file"}
          accept="image/*"
          register={{ ...register("profileImg") }}
        ></CustomFormGroup>
        hello
      </CustomButton> */}
      <CustomFileInput register={{ ...register("aro") }}>
        <CustomButton>click</CustomButton>
      </CustomFileInput>
    </form>
  );
}

export default CreatePost;

// <Box
//   sx={{ width: "97%", display: "flex", flexDirection: "row", gap: "20px" }}
// >
//   {/* <Box
//     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvC8-OY0R-Kpwb_ljU0AiAMXphXCQ30lYI4o-bLTLt&s"
//     sx={{ width: "90%" }}
//     component={"img"}
//   /> */}
//   <Card>
//     <CardMedia
//       component="img"
//       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvC8-OY0R-Kpwb_ljU0AiAMXphXCQ30lYI4o-bLTLt&s"
//       alt="My Image"
//     />
//     <Box
//       sx={{
//         display: "flex",
//         width: "90%",
//         m: "auto",
//       }}
//       component={"div"}
//     >
//       <TextField
//         size="small"
//         multiline
//         maxRows={8}
//         variant="filled"
//         sx={{ width: "90%" }}
//         label="Write somthing..."
//       />
//       <RiSendPlaneFill className="send-icon" />
//     </Box>
//   </Card>
// </Box>
