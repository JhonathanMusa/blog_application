import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { CommentsList } from "./CommentsList";
import { AddComment } from "./AddComment";
import { DeleteComment } from "./DeleteComment";
import { UpdateComment } from "./UpdateComment";

export const Nav = () => {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" aria-current="page" to="/">
              Home
            </Link>
          </div>

          <Link className="styleLinks" to="/comments">
            Comments List
          </Link>
          <Link className="styleLinks" to="/new-comment">
            Add New Comment
          </Link>
        </header>
      </div>

      <Route path="/" exact component={Home} />
      <Route path="/comments" component={CommentsList} />
      <Route path="/new-comment" component={AddComment} />
      <Route path="/delete/:id" component={DeleteComment} />
      <Route path="/update/:id" component={UpdateComment} />
    </Router>
  );
};
