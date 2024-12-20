import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import employeeRoute from './routes/employeeRoute.js';
import authRoute from './routes/authRoute.js'

const app = express();

app.use(express.json());

const mongoURI = process.env.MONGO_URI || "mongodb://localhost/employeemanagement";
mongoose.connect(mongoURI)
    .then(() => console.log(`Connected to ${mongoURI}`))
    .catch((err) => console.error(`Failed to connect to MongoDB: ${err.message}`));

app.use("/employees", employeeRoute);
app.use("/auth", authRoute);

const curPort = process.env.PORT || 3500;
app.listen(curPort, () => console.log(`Server running on port ${curPort}`));
