const express = require('express');
const router = express.Router();
const Application = require('../models/Application');

router.get('/job/:jobId', async (req, res) => {
  try {
    const applications = await Application.find({ jobId: req.params.jobId });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { jobId, candidateName, resume } = req.body;
    const newApplication = new Application({ jobId, candidateName, resume });
    await newApplication.save();
    res.status(201).json({ message: 'Solicitud enviada exitosamente.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
