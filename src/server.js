import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(require("./routes/routes"));

// server listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
