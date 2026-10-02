require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Allowed CORS origins — configurable via ALLOWED_ORIGIN env var
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://axvirotechnologies.vercel.app',
  process.env.ALLOWED_ORIGIN,
].filter(Boolean);

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    // In production, allow all origins if ALLOWED_ORIGIN='*'
    if (process.env.ALLOWED_ORIGIN === '*') {
      return callback(null, true);
    }
    return callback(new Error(`CORS policy: origin ${origin} not allowed`));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'Axviro Technologies API', timestamp: new Date().toISOString() });
});

// Legacy status endpoint (kept for backward compatibility)
app.get('/api/status', (req, res) => {
  res.status(200).json({ message: 'Axviro Technologies API is online!' });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, company, projectType, message } = req.body;

  // Basic validation
  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Name is required' });
  }
  if (!email || !email.trim() || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email is required' });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Sanitize / log the submission
  console.log(`[Axviro Contact] New inquiry:
    Name: ${name.trim()}
    Email: ${email.trim()}
    Company: ${company ? company.trim() : 'N/A'}
    Project Type: ${projectType || 'N/A'}
    Message: ${message.trim().substring(0, 100)}...
    Timestamp: ${new Date().toISOString()}`);

  // Return success response
  return res.status(200).json({
    success: true,
    message: 'Thank you for contacting Axviro Technologies. We will review your message and get back to you shortly.',
  });
});

// 404 handler for unknown API routes
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.path} not found` });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('[API Error]:', err.message);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

app.listen(PORT, () => console.log(`Axviro Technologies API running on port ${PORT}`));
