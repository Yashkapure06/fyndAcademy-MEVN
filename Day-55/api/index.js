const http = require('http');
const fs = require('fs');
const PORT = 5000;

const server = http.createServer((req, res)=>{
    if(res.url == '/userapi'){
        fs.readFile(`${__dirname}/userapi/userapi.json`,'utf-8',(err, data)=>{
            console.log(data)
            const objData = JSON.parse(data)
            res.end(JSON.stringify(objData))
        })
    }

})  

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})