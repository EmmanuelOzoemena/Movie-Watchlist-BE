import express from "express";

// Import Routes
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

// API Routes
app.use("/movies", movieRoutes);

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

const PORT = 5001;
const server = app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

// GET, POST, PUT, DELETE

// TO-DO
// Auth - signin & signup
// Movie - getting all movies
// User - profile
// Watchlist - add and remove from our watch list
