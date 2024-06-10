require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const router = require('./src/routes');

const app = express();

// middlewares
app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/', router);

// start server
const PORT = process.env.POSTGRES_URL || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
