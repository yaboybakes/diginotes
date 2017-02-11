const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
	id: Number,
  msg: String
});

module.exports = mongoose.model('Note', NoteSchema);
