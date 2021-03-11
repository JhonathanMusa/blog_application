import { Pool } from "pg";
const pool = new Pool({
  host: "localhost",
  database: "blog_mern",
  user: "postgres",
  password: "musa2259",
  port: 5432,
});

// GET METHOD: get all the comments from the users
const getComments = async (req, res) => {
  const response = await pool.query("SELECT * FROM users");
  console.log(response.rows);
  res.status(200).json(response.rows);
};

// GET by id METHOD: get comment from an specific id
const getCommentById = async (req, res) => {
  const _id = req.params.id;
  const response = await pool.query("SELECT * FROM users WHERE id = $1", [_id]);
  console.log(response.rows);
  res.status(200).json(response.rows);
};

// GET by name METHOD: get all the comments from an specific user
const getCommentsByUser = async (req, res) => {
  const username = req.params.name;
  const response = await pool.query("SELECT * FROM users WHERE name = $1", [
    username,
  ]);
  console.log(response.rows);
  res.status(200).json(response.rows);
};

// POST METHOD: add new comments and users to the database
const addComment = async (req, res) => {
  const { name, email, text } = req.body;
  const response = await pool.query(
    "INSERT INTO users (name, email, text)VALUES($1, $2, $3)",
    [name, email, text]
  );
  console.log(response);
  res.status(200).json({
    message: "User Added Successfully",
    body: {
      comment: { name, email, text },
    },
  });
};

// UPDATE METHOD: update the data from a specific id
const updateComment = async (req, res) => {
  const _id = req.params.id;
  const { name, email, text } = req.body;
  const response = await pool.query(
    "UPDATE users SET name = $1, email= $2, text=$3 WHERE id = $4",
    [name, email, text, _id]
  );
  console.log(response);
  res.json(`Comment with id ${_id} updated successfully`);
};

// DELETE METHOD: delete an specific comment by id
const deleteComment = async (req, res) => {
  const _id = req.params.id;
  const response = await pool.query("DELETE FROM users WHERE id = $1", [_id]);
  console.log(response);
  res.status(200).json(`Commet with id ${_id} deleted successfully`);
};

module.exports = {
  getComments,
  getCommentById,
  getCommentsByUser,
  addComment,
  updateComment,
  deleteComment,
};
