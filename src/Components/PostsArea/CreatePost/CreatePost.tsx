import { Box, Card, CardMedia, TextField, Typography } from "@mui/material";
import "./CreatePost.css";
import { RiSendPlaneFill } from "react-icons/ri";

function CreatePost(): JSX.Element {
  return (
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
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          m: "auto",
        }}
      >
        <CardMedia
          sx={{ maxHeight: "80vh" }}
          component="img"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvC8-OY0R-Kpwb_ljU0AiAMXphXCQ30lYI4o-bLTLt&s"
          alt="My Image"
        />

        <Box
          sx={{
            display: "flex",
          }}
          component={"div"}
        >
          <TextField
            size="small"
            multiline
            maxRows={8}
            sx={{ flexGrow: 1 }}
            variant="filled"
            label="Write somthing..."
          />
          <Box className="send-icon-div">
            <RiSendPlaneFill className="send-icon" />
          </Box>
        </Box>
      </Card>
    </>
  );
}

export default CreatePost;
