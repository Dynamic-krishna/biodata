const express = require("express");
const nodemon = require("nodemon");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// setInterval(() => {
//     const now = new Date();
//     console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// }, 20000);


app.listen(PORT, () => {
  // console.log(`Server is running on port ${PORT}`);
});
