var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NewsSchema = new Schema({
    headline: {
        type: String
    },
    summary: {
        type: String
    },
    url: {
        type: String
    }
})