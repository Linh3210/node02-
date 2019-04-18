const http = require('http');
const url = require('url');

const host = process.env.HOST;
const port = process.env.PORT;

var server = http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (req.url == "/hello")
    {
        if (req.method == "GET")
        {
            res.write("world");
            res.end();
        }
        else if (req.method == "POST")
        {
            res.write("world created");
            res.end();
        }
        else if (req.method == "PUT")
        {
            res.write("world updated");
            res.end();
        }
        else if (req.method == "DELETE")
        {
            res.write("world deleted");
            res.end();
        }
    }
    else
    {
        res.write("URL not found!");
    }
}).listen(3000);
/*
server.listen(port, host, function (err) {
    if (!err) console.log(`Server started ${host} on ${port}`);
    else console.log(err);
});
*/

