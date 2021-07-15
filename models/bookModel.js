const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    ISBN: {type: String, required: true},
    title: {type: String, required: true},
    qty: {type: String, required: true},
    publishingDate: {type: String, required: true},
},{
    timestamps: true
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;