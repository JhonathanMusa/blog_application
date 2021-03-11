import axios from "axios";
import React, { useState } from "react";

export default function AddComment() {
  const [newComment, setNewComment] = useState([]);

  const inputHandle = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    });
  };

  const submithandle = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/add-comment/", newComment)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
