const router = require("express").Router();
let Book = require("../models/bookModel");

router.get("/", (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json("Error:" + err));
});

router.get("/:id", (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(400).json("Error: " + err));
});
// Add an update option route later
router.put("/update/:id", (req, res) => {
    Book.findById(req.params.id)
        .then((book) => {
            book.ISBN = req.body.ISBN;
            book.title = req.body.title;
            book.qty = req.body.qty;
            book.publishingDate = req.body.publishingDate;

            book.save()
                .then(() => {
                    res.json("Book updated!")
                })
                .catch((err) => {
                    res.status(400).json("Error: " + err);
                })
        })
        .catch((err) => {
            res.status(400).json("Error: " + err)
        })
})

router.post("/add", (req, res) => {
    const ISBN = req.body.ISBN;
    const title = req.body.title;
    const qty = req.body.qty;
    const publishingDate = req.body.publishingDate;

    const newBook = new Book({
        ISBN,
        title, 
        qty,
        publishingDate,
    });

    newBook.save()
        .then(() => res.json("Book added to list..."))
        .catch(err => res.status(400).json("Error: " + err));
});

router.delete("/delete/:id", (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(() => res.json("Exercise deleted"))
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;