const http = require("http"); // import http module from Node.js

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
        "Server": "Node.js"
    });

    res.end("Hello World");
});

const port = 5005;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});