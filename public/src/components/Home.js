import React, { Fragment } from "react";
import { Nav } from "./Nav";
import { CommentsList } from "./CommentsList";

const Home = () => {
  return (
    <Fragment>
      <Nav />
      <CommentsList />
    </Fragment>
  );
};

export default Home;
