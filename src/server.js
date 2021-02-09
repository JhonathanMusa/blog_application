import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;
import cors from "cors";

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require("./routes/routes"));

// server listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
