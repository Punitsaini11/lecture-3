const express = require('express');
const app = express();
const PORT = 3000;

const user=[
 { id: 1, name: "Aarav Sharma", email: "aarav.sharma@example.com" },
  { id: 2, name: "Rohan Verma", email: "rohan.verma@example.com" },
  { id: 3, name: "Aditya Singh", email: "aditya.singh@example.com" },
  { id: 4, name: "Arjun Mehta", email: "arjun.mehta@example.com" },

]

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('hello user this side ');
});
app.listen(PORT, () => {
    console.log(`server is running on the port ${PORT}`);
    
});

app.get('/users', (req, res) => {
    res.json(user);
});
