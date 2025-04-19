require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());

// Import and use the newsletter router
const newsletterRouter = require('./routes/newsletter');
app.use('/api/newsletter', newsletterRouter);

const quoteRouter = require('./routes/quote');
app.use('/api/quote', quoteRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
