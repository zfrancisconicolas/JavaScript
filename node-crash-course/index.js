const http = require('http');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 5000;

const server = http.createServer(
    (req, res) => {
        // if(req.url === '/'){
        //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (error, content) => {
        //         res.writeHead(200, {'Content-Type':'text/html'});
        //         res.end(content);
        //     });
        // }
        // console.log(req.url);

        // if(req.url == '/api/users'){
        //     fs.readFile(path.join(__dirname, 'public', 'users.json'), (error, content) => {
        //         res.writeHead(200, {'Content-Type':'application/json'});
        //         res.end(content);
        //     });
        // }
    
        let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
        let extName = path.extname(filePath);
        let contentType = 'text/html';

        switch(extName){
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
            case '.png':
                contentType = 'img/png';
                break;
            case '.jpg':
                contentType = 'img/jpg';
                break;
        }

        fs.readFile(filePath, (err, content) => {
            if(err){
                if(err.code == 'ENOENT'){
                    //Page not found error
                    fs.readFile(path.join(__dirname, 'public', '404.html'),
                    (err, content) => {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.end(content, 'utf8');
                    });
                }
                else{
                    //probably a sv error
                    res.writeHead(500);
                    res.end(`Server error ${err.code}`);
                }
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content, 'utf8');
            }
        });
    }   
);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));