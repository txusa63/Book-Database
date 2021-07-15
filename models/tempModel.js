const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tempSchema = new Schema({
    title: {type: String, required: true}
},
{
    timestamps: true
});

const Temp = mongoose.model("Temp", tempSchema);
module.exports = Temp;