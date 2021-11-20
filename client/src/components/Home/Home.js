import React, { useState } from "react";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Pagination from "../Pagination/Pagination";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import { useDispatch } from "react-redux";
import { getPostBySearch } from "../../actions/posts";
import { mergeClasses } from "@material-ui/styles";
import useStyes from "./style";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const dispatch = useDispatch();
  const classes = useStyes();
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const handleKeyPress = (e) => {
    if (e.keyCode == 13) {
      //enter key
      searchPost();
    }
  };
  const handleAdd = (tag) => {
    const newtags = [...tags, tag];
    setTags(newtags);
  };
  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag != tagToDelete));
  const searchPost = () => {
    if (search.trim() || tags) {
      // dispatch -> fetch search post
      dispatch(getPostBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push("/");
    }
  };
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={mergeClasses.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts key={1} setCurrentId={setCurrentId}></Posts>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                onKeyPress={handleKeyPress}
                fullWidth
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={(tag) => handleAdd(tag)}
                onDelete={(tag) => handleDelete(tag)}
                label="Search Tags"
                variant="outlined"
              ></ChipInput>
              <Button
                onClick={searchPost}
                className={classes.search}
                color="primary"
                variant="contained"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
            <Paper elevation={6}>
              <Pagination
                className={classes.pagination}
                page={page}
              ></Pagination>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
