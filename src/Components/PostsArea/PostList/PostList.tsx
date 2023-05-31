import { Box } from "@mui/material";
import "./PostList.css";
import { PostModel } from "../../../models/PostModel";
import Post from "./Post/Post";
import { useInfiniteQuery } from "@tanstack/react-query";
import { postService } from "../../../services/postService";
import { LastPage } from "@mui/icons-material";
import { useCallback, useRef } from "react";

function PostList(): JSX.Element {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isError } =
    useInfiniteQuery(
      ["what"],
      ({ pageParam: pageNum = 1 }) => postService.getFollowedPosts({ pageNum }),
      {
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.length ? allPages.length + 1 : undefined;
        },
      }
    );

  const intObserver = useRef<IntersectionObserver>();
  const lastPostRef = useCallback(
    (node: HTMLDivElement) => {
      if (intObserver.current && isError)
        return intObserver.current.disconnect();
      if (isFetchingNextPage) return;
      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          console.log("fetchNextPage");
          fetchNextPage();
        }
      });

      if (node) intObserver.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  return (
    <Box>
      {data?.pages.map((page) =>
        page.map((post, i) => {
          if (page.length === i + 1) {
            return <Post key={post.id} post={post} ref={lastPostRef} />;
          }
          return <Post key={post.id} post={post} />;
        })
      )}
    </Box>
  );
}

export default PostList;
