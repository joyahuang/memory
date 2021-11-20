import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./style";
const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const { posts, isLoading } = useSelector((state) => {
    return state.posts;
  });
  if (!posts.length && !isLoading) {
    return "No Posts";
  }
  return isLoading ? (
    <CircularProgress></CircularProgress>
  ) : (
    <Grid
      className={classes.container}
      container
      alighitems="strech"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} lg={3}>
          <Post key={post.id} post={post} setCurrentId={setCurrentId}></Post>
        </Grid>
      ))}
    </Grid>
  );
};
export default Posts;
