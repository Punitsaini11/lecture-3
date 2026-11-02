const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./model/doctors.model')
const app = express();
const port = 3000;

app.use(express.json());
app.use('/',doctorsRoutes)



mongoose.connect('mongodb://localhost:27017/HospitalDB').then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.log(err);
    
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


