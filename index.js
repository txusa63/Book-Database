const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err) => {
    if(err) {
        return console.error(err);
    }
    console.log('Connection to MongoDB established');
});

const bookRouter = require("./routes/books");

app.use("/books", bookRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
