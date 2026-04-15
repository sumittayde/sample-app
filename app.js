const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello CI/CD 🚀");
});

server.listen(3000, () => console.log("Server running"));
