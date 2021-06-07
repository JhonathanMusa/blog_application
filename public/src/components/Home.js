import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Blog Application</h1>
      <p className="paragraph">Here, You can see what your friends say</p>

      <div className="navButtons">
        <div>
          <Link to="/comments">
            <button className="btnNavs btnNavsLinks">See comments</button>
          </Link>
        </div>

        <div>
          <Link to="/new-comment">
            <button className="btnNavs btnNavsLinks">Add new comments</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
