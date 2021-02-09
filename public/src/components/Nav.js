import React, { Fragment } from "react";

const url = "http://www.google.com";

export const Nav = () => {
  return (
    <Fragment>
      <nav className="nav bg-dark">
        <a className="nav-link active" aria-current="page" href={url}>
          Home
        </a>
        <a className="nav-link" href={url}>
          Comments List
        </a>
        <a className="nav-link" href={url}>
          Add New Comment
        </a>
      </nav>
    </Fragment>
  );
};


