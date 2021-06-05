import axios from "axios";
import React, { useState } from "react";

const url = "http://localhost:8000/add-comment/";

export const AddComment = (props) => {
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
        const { data } = await axios.post(url, newComment);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    addComment();
    props.history.push("/comments");
  };

  return (
    <div className="container-add-comments">
      <form onSubmit={submithandle}>
        <div className="form-group">
          <input
            className="form-input"
            name="name"
            onChange={inputHandle}
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="form-group">
          <input
            className="form-input"
            name="email"
            onChange={inputHandle}
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-text-area"
            name="text"
            onChange={inputHandle}
            placeholder="text"
          ></textarea>
        </div>
        <div>
          <button className="btnForm">Send</button>
        </div>
      </form>
    </div>
  );
};
