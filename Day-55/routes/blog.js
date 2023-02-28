const express = require('express');
const path  = require('path');
const blogs = require('../data/blogs')
const router = express.Router();

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'../template/index.html'))
})

router.get('/blogs', (req, res)=>{
    blogs.forEach(blog => {    
        console.log(blog.author)

    });
    res.sendFile(path.join(__dirname,'../template/index.html'))
});

router.get('/blogpost/:slug', (req, res)=>{
    const myBlog = blogs.filter((e)=>{
        return e.blog === req.params.slug
    })
    console.log(myBlog)
    res.sendFile(path.join(__dirname,'../template/blogHome.html'))
})

module.exports = router;