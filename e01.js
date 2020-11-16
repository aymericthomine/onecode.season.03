const http = require('http');
const port = process.argv[2];

const server = http.createServer((req, res) => {
    res.end('<h1>Hello world!</h1>');
});

if (port === undefined) {
    return console.log('usage: node e01.js <PORT>')
}

server.listen(port, (err) => {

    if (err) {
        return console.log('error', err)
    }

    console.log(`Server is running at port ${port}`)

});