const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const path = require('path')
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

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.use('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
