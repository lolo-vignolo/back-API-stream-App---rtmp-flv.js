const mongoose = require('mongoose');

const StreamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  codeToDelete: {
    type: String,
    required: true,
  },
});

const Stream = mongoose.model('Stream', StreamSchema);

module.exports = {
  Stream,
};
