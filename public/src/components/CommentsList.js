import React, { useEffect, useState } from "react";
import axios from "axios";

const Comment = (props) => (
  <tr>
    <td>{props.comment.name}</td>
    <td>{props.comment.email}</td>
    <td>{props.comment.text}</td>
    <td>{props.comment.create_at}</td>
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
    <div>
      <table className="table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Text</th>
            <th>Create at</th>
          </tr>
        </thead>
        <tbody>{comments()}</tbody>
      </table>
    </div>
  );
};
