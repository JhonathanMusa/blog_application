import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export const Home = () => {
  return (
    <div>
      <h1>Blog Application</h1>
      <p className={styles.paragraph}>
        Here, You can see what your friends say
      </p>

      <div className={styles.navButtons}>
        <div>
          <button className={styles.btnNavs}>
            <Link className={styles.btnNavsLinks} to="/comments">
              See comments
            </Link>
          </button>
        </div>

        <div>
          <button className={styles.btnNavs}>
            <Link className={styles.btnNavsLinks} to="/new-comment">
              Add new comments
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
