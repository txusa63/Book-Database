const tempRouter = require("express").Router()
let Temp = require("../models/tempModel");

tempRouter.get("/", (req, res) => {
    Temp.find()
        .then((temps) => {
            res.json(temps);
        })
        .catch((err) => {
            res.status(400).json("Error: " + err);
        });
});

tempRouter.post("/add", (req, res) => {
    const title = req.body.title;

    const newTemp = new Temp({title});

    newTemp.save()
        .then(() => {
            res.json("Desired book added to list.");
        })
        .catch((err) => {
            res.status(400).json("Error: " + err);
        })
})

module.exports = tempRouter;