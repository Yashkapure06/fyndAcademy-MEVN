const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fynd-api')
    .then(() => {
        console.log('Connection Successful');
    })
    .catch((err) => console.log(err));
