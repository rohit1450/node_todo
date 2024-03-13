const express = require('express');
const cors = require('cors');
require('./db/config');
const Todo = require('./todoModal');
const todoRoutes = require('./src/routes/todoRoutes');


const app = express();
app.use(express.json());
app.use(cors());



app.use('/api', todoRoutes);

app.listen(5000);