const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const listingsAndReviewsRouter = require("./routes/listingsAndReviews");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
const port = 3001;
const clientUrl = "http://localhost:3001";

const { MONGO_DB_USERNAME, MONGO_DB_PASSWORD, MONGO_DB_DATABASE_NAME } =
  process.env;

mongoose
  .connect(
    `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@cluster0.fczes.mongodb.net/${MONGO_DB_DATABASE_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database connected successfully! 🥳");
  })
  .catch((error) => {
    console.log("Database connected failed ☹️");
    console.log(error);
  });

app.use("/api", listingsAndReviewsRouter);

// !! Your middleware should not go below this line !!
// Serve frontend client/build folder
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
  console.log(`Visit ${clientUrl} in your browser`);
});
