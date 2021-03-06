import axios from "axios";
import React, { useEffect, useState } from "react";

const URL = "http://localhost:8000/comment/";

export const UpdateComment = (props) => {
  const [updateComment, setUpdateComment] = useState([]);

  const { id } = props.match.params;

  useEffect(() => {
    const getComment = async () => {
      try {
        const response = await axios.get(URL + id);
        setUpdateComment(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getComment();
  }, [id]);

  const inputHandle = (e) => {
    setUpdateComment({
      ...updateComment,
      [e.target.name]: e.target.value,
    });
  };

  const submithandle = (e) => {
    e.preventDefault();

    const inserTdata = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:8000/add-comment/",
          updateComment
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    inserTdata();

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
            value={updateComment.name}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            onChange={inputHandle}
            placeholder="Email"
            type="email"
            value={updateComment.email}
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
          <button className="btn btn-primary btn-block">Send</button>
        </div>
      </form>
    </div>
  );
};
