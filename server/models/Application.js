const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
  candidateName: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
