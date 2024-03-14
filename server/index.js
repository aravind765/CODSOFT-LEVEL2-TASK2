const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const port = 3001;
const cors = require('cors'); 

app.use(express.json());
app.use(cors());

const jobs = require('./db.json').jobs;
const users = require('./db.json').users;

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, 'your-secret-key');
  res.json({ token });
});

app.post('/signup', (req, res) => {
  const { username, password, role } = req.body;

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  const newUser = {
    id: users.length + 1,
    username,
    password: bcrypt.hashSync(password, 10),
    role,
  };

  users.push(newUser);

  res.json({ message: 'User registered successfully' });
});

app.get('/jobs', authenticateToken, (req, res) => {
  res.json(jobs);
});

app.get('/jobs/:id', authenticateToken, (req, res) => {
  const jobId = parseInt(req.params.id);
  const job = jobs.find(job => job.id === jobId);

  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ error: 'Job not found' });
  }
});

app.post('/job-applications', authenticateToken, (req, res) => {
  res.json({ message: 'Job application submitted successfully' });
});

// Obtener perfil de candidato
app.get('/api/candidates/:id', authenticateToken, (req, res) => {
  const candidateId = req.params.id;
  const candidateProfile = users.find(user => user.id === parseInt(candidateId) && user.role === 'candidate');

  if (candidateProfile) {
    res.json(candidateProfile);
  } else {
    res.status(404).json({ error: 'Candidate not found' });
  }
});

// Actualizar perfil de candidato
app.put('/api/candidates/:id', authenticateToken, (req, res) => {
  const candidateId = req.params.id;
  const updatedProfile = req.body;

  // Buscar el índice del candidato en la lista de usuarios
  const index = users.findIndex(user => user.id === parseInt(candidateId) && user.role === 'candidate');

  if (index !== -1) {
    // Actualizar el perfil del candidato
    users[index] = { ...users[index], ...updatedProfile };
    res.json({ message: 'Candidate profile updated successfully' });
  } else {
    res.status(404).json({ error: 'Candidate not found' });
  }
});

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) return res.status(403).json({ error: 'Forbidden' });
    req.user = user;
    next();
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
