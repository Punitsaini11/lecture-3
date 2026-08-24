const http = require("http");

const users = [
  { id: 1, name: "Aarav Sharma", email: "aarav.sharma@example.com" },
  { id: 2, name: "Rohan Verma", email: "rohan.verma@example.com" },
  { id: 3, name: "Aditya Singh", email: "aditya.singh@example.com" },
  { id: 4, name: "Arjun Mehta", email: "arjun.mehta@example.com" },
  { id: 5, name: "Karan Gupta", email: "karan.gupta@example.com" },
 
];


const server = http.createServer((req, res) => {

  if (req.url === "/" && req.method === "GET") {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Home Page</h1>");
    res.end();

  } else if (req.url === "/about" && req.method === "GET") {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to About Page</h1>");
    res.end();

  } else if (req.url === "/contact" && req.method === "GET") {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to Contact Page</h1>");
    res.end();

  } else if (req.url === "/users" && req.method === "GET") {

    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(users));
    res.end();

  } else {

    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Page Not Found</h1>");
    res.end();

  }

});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});