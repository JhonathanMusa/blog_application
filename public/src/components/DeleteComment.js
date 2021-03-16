import axios from "axios";
import React, { useEffect, useState } from "react";

export default function DeleteComment(props) {
  const [deleteComment, setDeleteComment] = useState({
    name: "",
    email: "",
    text: "",
  });

  const { id } = props.match.params;

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/comment/${id}`);
        setDeleteComment(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id, setDeleteComment]);

  const inputHandle = (e) => {
    setDeleteComment({
      ...deleteComment,
      [e.target.name]: e.target.value,
    });
  };

  const submithandle = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:8000/comment/${id}`, deleteComment)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    props.history.push("/comments");
  };
  return (
    <div>
      <form onSubmit={submithandle}>
        <div className="form-group">
          <input
            className="form-control"
            name="name"
            onChange={inputHandle}
            placeholder="Name"
            type="text"
            value={deleteComment.name}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            onChange={inputHandle}
            placeholder="Email"
            type="email"
            value={deleteComment.email}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="text"
            onChange={inputHandle}
            placeholder="text"
            value={deleteComment.text}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-success btn-block">Send</button>
        </div>
      </form>
    </div>
  );
}
