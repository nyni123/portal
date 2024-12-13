import express from 'express';
import path from 'path';
import vendorRoutes from './routes/vendorRoutes.js';
import aptRoutes from './routes/aptRoutes.js';
import paramsRoutes from './routes/paramsRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';
import mongoose from 'mongoose';
import { connectToVendorDB } from './config/db.js';
import cors from 'cors';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import axios from 'axios';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: 'http://18.224.5.169',
  methods: 'GET',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../frontend/build')));


app.use('/getvendors', vendorRoutes);
app.use('/getapt', aptRoutes);
app.use('/getparams',paramsRoutes);
app.use('/test',vendorRoutes);
app.use('/api', authRoutes);

// NewsAPI Proxy Route
app.get('/api/pulses', async (req, res) => {
  console.log('here');
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        sources: 'techcrunch',
        apiKey: '6e0f48a20adc45b48eb9ee5f89d90476', // Use your API key here
      },
    });
    console.log(response);
    res.json(response.data); // Forward the NewsAPI response to the client
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.use(errorHandler);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});


connectToVendorDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`); // Log the requested URL
  next();
});

