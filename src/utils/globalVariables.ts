class QueryKeys {
  suggestedUsers = ["suggested"];

  userData = (userId: number) => ["user", { userId }];

  userProfileImg = (profileImg = "") => ["user", { profileImg }];

  followedUsersPosts = (pageNum: number, userId?: number) => [
    "followedPosts",
    { pageNum, userId },
  ];
}

export const queryKeys = new QueryKeys();
