import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import CommentsList from "./CommentsList";

export default function Nav() {
  return (
    <Router>
      <div>
        <nav className="nav bg-dark">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/comments">
            Comments List
          </Link>
          <Link className="nav-link" to="/">
            Add New Comment
          </Link>
        </nav>
      </div>
      <Route path="/" component={Home} />
      <Route path="/comments" component={CommentsList} />
    </Router>
  );
}
