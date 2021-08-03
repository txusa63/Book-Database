const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    key: {type: String, required: true},
    ISBN: {type: String, required: true},
    title: {type: String, required: true},
    author: {type: String, required: true},
    firstPublishYear: {type: String, required: true},
},{
    timestamps: true
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
