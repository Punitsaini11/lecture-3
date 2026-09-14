const employees = require("./data/employees");
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/",employeesRoutes)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

