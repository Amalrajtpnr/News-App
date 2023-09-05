const express = require("express");
require("dotenv").config();
// const helmet = require("helmet");
const cors = require("cors");
// const morgan = require("morgan");
const connectDB = require("./config/db.js");

const app = express();
const port = process.env.PORT;
const apiKey = process.env.NEWS_API_KEY;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Define an endpoint to fetch news articles about Bitcoin
app.get("/api/bitcoin-news", async (req, res) => {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apikey=85940a4d7b23488ba7ecd9e9e7c6533e"
    );
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Backend is running at http://localhost:${port}`);
});
