const http = require('http');
const module1 = require('./module1');
const module2 = require('./module2');

const hostname = '127.0.0.1';
const port = 8000;


const server = http.createServer((req, res)=>{
    const somevariable = "Hello World";
    module1.printName(somevariable);
    module1.printHello();
    const modifiedVar = module1.changeVar(somevariable);
    res.end(modifiedVar);
});
server.listen(port, hostname, ()=>{ console.log("web app running at port", port)
});