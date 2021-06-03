import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { CommentsList } from "./CommentsList";
import { AddComment } from "./AddComment";
import { DeleteComment } from "./DeleteComment";
import { UpdateComment } from "./UpdateComment";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <Router>
      <div>
        <header className={styles.row}>
          <Link className={styles.brand} aria-current="page" to="/">
            Home
          </Link>
          <Link className={styles.styleLinks} to="/comments">
            Comments List
          </Link>
          <Link className={styles.styleLinks} to="/new-comment">
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
