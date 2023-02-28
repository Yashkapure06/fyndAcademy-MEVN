const express = require('express');
const path  = require('path');
const PORT = 8000;
const app = express();
console.log('hello')


app.use('/',require(path.join(__dirname, './routes/blog')))
// app.use(express.static(path.join(__dirname, 'public')))


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})