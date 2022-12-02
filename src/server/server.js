const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DB =
  "mongodb+srv://aftab:railtel@cluster0.ndmoa.mongodb.net/vss?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));
