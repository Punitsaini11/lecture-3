const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./model/doctors.model')
const app = express();
const port = 3000;
const connnectDB = require('./config/db.js');
const doctorsRoutes = require('./routes/doctors.routes')


app.use(express.json());
app.use('/',doctorsRoutes)

connnectDB();


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


