const http = require('http');
const fs = require('fs');
const port = process.argv[2];
 
let server = (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    fs.readFile('./index.html', null, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.write('File not found!');
        } else {
            res.write(data);
        }
        res.end();

    });
};

console.log(`Server is running at port ${port}`);

if (port === undefined) {
    return console.log('usage: node e01.js <PORT>')
}

http.createServer(server).listen(port);