import axios from "axios";
import React, { useState } from "react";

export default function AddComment(props) {
  const [newComment, setNewComment] = useState([]);

  const inputHandle = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    });
  };

  const submithandle = (e) => {
    e.preventDefault();

    const addComment = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:8000/add-comment/",
          newComment
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    addComment();
    props.history.push("/comments");
  };

  return (
    <div className="container mt-3">
      <form onSubmit={submithandle}>
        <div className="form-group">
          <input
            className="form-control"
            name="name"
            onChange={inputHandle}
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            onChange={inputHandle}
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="text"
            onChange={inputHandle}
            placeholder="text"
          ></textarea>
        </div>
        <div>
          <button className="btn btn-success btn-block">Send</button>
        </div>
      </form>
    </div>
  );
}
