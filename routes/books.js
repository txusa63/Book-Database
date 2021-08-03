const router = require("express").Router();
let Book = require("../models/Book");

router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
      }

      catch (error) {
        console.error(err);
        res.status(500).send(err);
      }
});

router.post("/add", async (req, res) => {
    try {
        const {key, ISBN, title, author, firstPublishYear} = req.body;

        const newBook = new Book({
            key,
            ISBN,
            title,
            author,
            firstPublishYear,
        });

        const savedBook = await newBook.save();
        res.json(savedBook);
    } 
    
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        const book = await Book.findOne({_id: req.params.id});
        if(!book) {
            return res.status(400).json({errorMessage: 'No book found'});
        }

        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        res.json(deletedBook)
    } 
    
    catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;
