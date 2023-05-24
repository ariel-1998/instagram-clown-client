import { useQuery } from "react-query";
import "./SuggestedUsers.css";
import { queryKeys } from "../../../utils/globalVariables";
import { userService } from "../../../services/userService";
import SingleUser from "./SingleUser/SingleUser";
import { Box, List, Stack, styled } from "@mui/material";
import CustomTypo from "../../CustomComponents/CustomTypo";

interface SuggestedUsersProps {
  hasPosts: boolean;
}

//consider it the get post request that will be done in home component and will be past as props to here
function SuggestedUsers({ hasPosts }: SuggestedUsersProps): JSX.Element {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery(queryKeys.suggestedUsers, () => userService.getSuggestedUsers());

  return (
    <>
      {isError && <p>error</p>}

      {isLoading && <p>loading</p>}

      {users && (
        <>
          <Box margin="auto" width={hasPosts ? "100%" : "40%"}>
            <CustomTypo fontWeight="bold" pt={2}>
              Suggested for you
            </CustomTypo>
            <List
              sx={{
                //need to delete after
                bgcolor: "yellow",
              }}
            >
              <Stack direction={hasPosts ? "row" : "column"}>
                {users.map((user) => (
                  <SingleUser key={user.id} user={user} hasPosts={hasPosts} />
                ))}
              </Stack>
            </List>
          </Box>
        </>
      )}
    </>
  );
}

export default SuggestedUsers;
