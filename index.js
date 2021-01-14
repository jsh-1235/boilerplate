const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");

const administrator = require("./config/administrator");

const uri = `mongodb+srv://${administrator.user}:${administrator.password}@boilerplate.2pm95.mongodb.net/test?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connection is established."))
  .catch((error) => {
    console.error("MongoDB connection error: ", error);
    client.close();
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
