//1
const http = require('http');
const fs = require('fs');
const port = 8000;
//2
const server = http.createServer((req, res) => {
    // res.write('<h2>First Message</h2>');
    // res.end('<p>Second Message</p>');
    if(req.url=='/'){
        fs.readFile('./index.html',(err,data)=>{
            res.end(data);
        })
        // fs.readFile('./styles.css',(err,data)=>{
        //     res.end(data);
        // })
    }
    else if(req.url=='/about'){
        res.statusCode=200
        res.end('Second if');
    }
    else{
        res.statusCode=404
        res.end('Error');
    }
})

//3
server.listen(port,()=>{
    console.log(`listening to port ${port}`);
})
