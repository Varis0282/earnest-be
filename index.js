const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.log('Error in connecting to MongoDB', err);
    });

const get = async () => {
  const result = await fetch('https://earnest-fe.onrender.com/')
  console.log(result);
}

const get2 = async () => {
  const result = await fetch('https://earnest-be-226w.onrender.com')
  console.log(result);
}

setInterval(() => {
  get();
  get2();
}, 300000);


// Import routes
const authRoute = require('./routes/auth_routes');
const taskRoute = require('./routes/task_routes');

// Route middlewares
app.use('/api/user', authRoute);
app.use('/api/task', taskRoute);

app.listen(port, () => {
    console.log(`Backend server is running at http://localhost:${port}`)
});
