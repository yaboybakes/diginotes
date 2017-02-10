const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
	id: Number,
  message: String
});

module.exports = mongoose.model('Note', NoteSchema);
