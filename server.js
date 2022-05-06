const http = require("http");

const server = http.createServer((req, res) => {
  res.end("First request");
});

server.listen(process.env.PORT || 3000);
