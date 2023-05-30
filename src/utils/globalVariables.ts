class QueryKeys {
  suggestedUsers = ["suggested"];
  userProfileImg = (profileImg = "") => ["user", { profileImg }];
}

export const queryKeys = new QueryKeys();
