import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

export default function Nav() {
  return (
    <Router>
      <div>
        <nav className="nav bg-dark">
          <Link className="nav-link" aria-current="page" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/comments">
            Comments List
          </Link>
          <Link className="nav-link" to="/new-comment">
            Add New Comment
          </Link>
        </nav>
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/comments" component={CommentsList} />
      <Route path="/new-comment" component={AddComment} />
    </Router>
  );
}
