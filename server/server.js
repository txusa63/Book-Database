const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

app.use(cors());
app.use(express.json());

const db = process.env.LOCALDB;

mongoose.connect(db, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("Connection to MongoDB database established...");
});

const bookRouter = require("./routes/books");
const tempBookRouter = require("./routes/tempBooks");

app.use("/books", bookRouter);
app.use("/tempbooks", tempBookRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});