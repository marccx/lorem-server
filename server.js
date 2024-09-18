//app.js

const { log } = require("console");
const express = require("express");
const app = express();

var cors = require("cors");
const loremRoutes = require("./routes/loremRoutes");

app.use(cors());

app.use("/api", loremRoutes); // All routes in loremRoutes are prefixed with /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
