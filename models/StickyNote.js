import mongoose from 'mongoose'

let Schema = mongoose.schema;

let StickyNoteSchema = new Schema({
  message: {
    type: String
  },
  id: {
    type: Number
  }
});

let StickyNote = mongoose.model("StickyNote",StickyNoteSchema);

export StickyNote
