require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Use Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/content', require('./routes/content'));
app.use('/api/quizzes', require('./routes/quizzes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
