import { Avatar, Box, Divider, Grid } from "@mui/material";
import "./Profile.css";

function Profile(): JSX.Element {
  return (
    <Box flex={1}>
      <Box width={"75%"} mx={"auto"}>
        <Grid container gap={1} bgcolor={"yellow"} py={5}>
          <Grid item flex={1}>
            <Avatar src="" sx={{ margin: "auto", height: 150, width: 150 }} />
          </Grid>
          <Grid item flex={2}>
            helloakuh fiuhah aksd hdskuh
          </Grid>
        </Grid>
        <Divider sx={{ mt: 3 }} />
        {/** need to add Grid with post images */}
      </Box>
    </Box>
  );
}

export default Profile;
