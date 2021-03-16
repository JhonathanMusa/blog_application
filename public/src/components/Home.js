import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid bg-white text-center">
        <div className="container">
          <h1 className="display-4">Blog Application</h1>
          <p className="lead">Here, You can see what your friends say</p>

          <div className="btn-jumbo">
            <div>
              <button className="btn btn-dark">
                <Link className="text-light" to="/comments">
                  See comments
                </Link>
              </button>
            </div>

            <div>
              <button className="btn btn-dark">
                <Link className="text-light" to="/new-comment">
                  Add new comments
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
