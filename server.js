const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/fordapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ DB Error:', err));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
