import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Comment = (props) => (
  <tr>
    <td>{props.comment.name}</td>
    <td>{props.comment.email}</td>
    <td>{props.comment.text}</td>
    <td>
      <Link to={"/delete/" + props.comment.id}>
        <button className="btnListDelete btn-danger">Delete</button>
      </Link>
      <Link to={"/update/" + props.comment.id}>
        <button className="btnListUpdate btn-warning">Update</button>
      </Link>
    </td>
  </tr>
);

export const CommentsList = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios({
          url: "http://localhost:8000/comments/",
        });
        setResults(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, [setResults]);

  const comments = () => {
    return results.map((comment, i) => {
      return <Comment comment={comment} key={i} />;
    });
  };

  return (
    <div className="container">
      <table className="table text-center">
        <thead className="table-header">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Text</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{comments()}</tbody>
      </table>
    </div>
  );
};
