import { useQuery, useQueryClient } from "@tanstack/react-query";
import "./SuggestedUsers.css";
import { queryKeys } from "../../../utils/globalVariables";
import { userService } from "../../../services/userService";
import SingleUser from "./SingleUser/SingleUser";
import { Box, Divider, List, Stack, styled } from "@mui/material";
import CustomTypo from "../../CustomComponents/CustomTypo";
import { UserModel } from "../../../models/UserModel";

interface SuggestedUsersProps {
  hasPosts: boolean;
}

//consider it the get post request that will be done in home component and will be past as props to here
function SuggestedUsers({ hasPosts }: SuggestedUsersProps): JSX.Element {
  const queryClient = useQueryClient();

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery(queryKeys.suggestedUsers, () => userService.getSuggestedUsers());

  const updateOnFollow = (userId: number) => {
    queryClient.setQueryData<UserModel[] | undefined>(
      queryKeys.suggestedUsers,
      (oldData) => {
        const updatedData = oldData?.map((oldUser) => {
          if (userId === oldUser.id) {
            return {
              ...oldUser,
              isfollowed: oldUser.isfollowed ? false : true,
            };
          }
          return oldUser;
        });
        return updatedData;
      }
    );
  };

  const dividerComponent = (
    <Divider orientation={hasPosts ? "vertical" : "horizontal"} flexItem />
  );

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
                p: 1,
              }}
            >
              <Stack direction={hasPosts ? "row" : "column"} gap={1}>
                {users.map((user) => (
                  <>
                    <SingleUser
                      key={user.id}
                      user={user}
                      hasPosts={hasPosts}
                      onFollow={updateOnFollow}
                    />
                    {dividerComponent}
                  </>
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
