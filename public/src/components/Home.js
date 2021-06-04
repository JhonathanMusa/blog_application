import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Blog Application</h1>
      <p className="paragraph">Here, You can see what your friends say</p>

      <div className="navButtons">
        <div>
          <button className="btnNavs">
            <Link className="btnNavsLinks" to="/comments">
              See comments
            </Link>
          </button>
        </div>

        <div>
          <button className="btnNavs">
            <Link className="btnNavsLinks" to="/new-comment">
              Add new comments
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
