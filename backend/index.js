const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ message: 'Axviro Technologies API is online!' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`[Axviro Contact] New message from ${name} (${email}): ${message}`);
  res.status(200).json({ success: true, message: 'Message received. Welcome to Axviro Technologies.' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
