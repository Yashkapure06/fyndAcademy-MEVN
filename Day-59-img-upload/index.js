const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const crypto = require('crypto');

const app = express();


// setting app
app.set('view engine', 'ejs');
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/fynd-fileUpload')
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.error('Could not connect to MongoDB...'));


let mySchema = mongoose.Schema({
    picture: String
})

let myModel = mongoose.model('imagedata', mySchema);

//define storage


let storage = multer.diskStorage({
    destination: './public/images',
    filename: (req, file, cb) => {
        // cb(null,Date.now()+'-'+file.originalname );
        crypto.randomBytes(60, (err, raw)=> {
            if (err) return cb(err)

            cb(null, raw.toString('hex') + Date.now() + '.' + file.originalname.split('.').pop())
        })
    }
})

// setting multer
let upload = multer({
    storage:storage,
    fileFilter:(req, file, cb) =>{
        if(
            file.mimetype == 'image/jpeg' || 
            file.mimetype == 'image/png' || 
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/gif'            
            ){
            cb(null, true);
        }else{
            cb(null, false);
            cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
})

// single file post
app.post('/singlepost', upload.single('single_input'),(req, res)=>{
    req.file
    myModel.create({picture:req.file.filename})
    .then(()=>{
        res.redirect('/view')
    })
    .catch((err)=>{
        console.log(err);
    })
})


// multiple file post

app.post('/multiplepost', upload.array('multiple_input',3),(req, res)=>{
    req.files.forEach((single_image)=>{
        myModel.create({picture:single_image.filename})
        .then(()=>{
            res.redirect('/view')
        })
        .catch((err)=>{
            console.log(err);
        })
    })
   
})



app.get('/', (req, res) => {
    res.render('index');
})

app.get('/view', (req, res) => {
    myModel.find({})
    .then((data)=>{
        res.render('preview',{data})
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
})


app.listen(8000, () => {
    console.log('Listening on port 8000...');
})