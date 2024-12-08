const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/data"){
        res.end("data")
    }
    res.end("hello from server")
})

server.listen(3000);