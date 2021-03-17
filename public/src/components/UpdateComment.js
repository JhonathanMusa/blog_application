import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UpdateComment(props) {
  const [updateComment, setUpdateComment] = useState([]);

  const { id } = props.match.params;

  useEffect(() => {
    const getComment = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/comment/${id}`);
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

    axios
      .post("http://localhost:8000/add-comment/", updateComment)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

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
          <button className="btn btn-success btn-block">Send</button>
        </div>
      </form>
    </div>
  );
}
