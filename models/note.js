var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    text: {
        Type: String
    }
    // news: [{
    //     Type: Schema.Types.ObjectId,
    //     ref: "News"
    // }]
});

var Note = mongoose.model("Note",NoteSchema);

module.exports = Note;