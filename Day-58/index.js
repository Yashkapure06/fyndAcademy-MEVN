const mongoose = require('mongoose');
const express = require('express');


mongoose.connect('mongodb://localhost:27017/fyndacademy')
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB');
})

//* schema
const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:Boolean
    },
    courseType: String,
    numVideos:Number,
    author:String,
    active:Boolean
})


//create collection 
const courseRecord = new mongoose.model('courseRecord', courseSchema);


// const vueData =  new courseRecord({
//     title:'Vue',
//     courseType: 'Frontend',
//     numVideos:25,
//     author:'Richa Maam',
//     active:true 
    
// })

//* save data
// vueData.save()

//* save data using async await

// const createDocument = async ()=>{
    // try{
    //     const reactData =  new courseRecord({
    //         title:'React',
    //         courseType: 'Frontend',
    //         numVideos:36,
    //         author:'Richa Maam',
    //         active:true
    //     })
    //     const result = await reactData.save();
    //     console.log(result);
    // }
    // catch(err){
    //     console.log(err);
    // }
// }

// createDocument();



//* use insertMany
// const createDocument = async ()=>{
//     try{
//         const htmlData =  new courseRecord({
//             title:'HTML',
//             courseType: 'Frontend',
//             numVideos:16,
//             author:'Richa Maam',
//             active:true
//         })
//         const cssData =  new courseRecord({
//             title:'CSS',
//             courseType: 'Frontend',
//             numVideos:16,
//             author:'Richa Maam',
//             active:true
//         })
//         const jsData =  new courseRecord({
//             title:'JS',
//             courseType: 'Frontend',
//             numVideos:16,
//             author:'Richa Maam',
//             active:true
//         })
//         const mongoDBData =  new courseRecord({
//             title:'mongoDB',
//             courseType: 'Database',
//             numVideos:16,
//             author:'Richa Maam',
//             active:true
//         })
//         const nodeData =  new courseRecord({
//             title:'NodeJs',
//             courseType: 'Backend',
//             numVideos:16,
//             author:'Richa Maam',
//             active:true
//         })
//         const expressData =  new courseRecord({
//             title:'Express',
//             courseType: 'Backend',
//             numVideos:16,
//             author:'Richa Maam',
//             active:true
//         })
//         const result = await courseRecord.insertMany([htmlData,cssData,jsData,mongoDBData,nodeData,expressData]);
//         console.log(result);

//     }
//     catch(err){
//         console.log(err);
//     }
// }

// createDocument();

//* read data
// const getDocument = async ()=>{
    // const resultData = await courseRecord.find()
    //use projection
    
    // const resultData = await courseRecord.find({courseType:'Frontend'})
    
    // const resultData = await courseRecord.find({courseType:'Frontend'}).select({title:1})

//     const resultData = await courseRecord.find({courseType:'Frontend'}).select({title:1, _id:0}).limit(1)
//     console.log(resultData);
// }
// getDocument()


//comparison query operators
// const getDocument = async ()=>{
//     try{
        // const result2 =  await courseRecord.find({numVideos:16})
        // const result2 =  await courseRecord.find({numVideos:{$gte:17}})
        
        //* $in combination of data
        // const result2 =  await courseRecord.find({courseType:{$in:['Backend','Database']}}).limit(1)
        // const result2 =  await courseRecord.find({courseType:{$in:['Backend','Database']}}).select({title:1})
        // const result2 =  await courseRecord.find({courseType:{$in:['Backend','Database']}}).select({title:1}).skip(1)
//         const result2 =  await courseRecord.find({courseType:{$nin:['Backend','Database']}}).select({title:1}).skip(1);


//         console.log(result2);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getDocument()

// count and sorting

// const getDocument = async ()=>{
//     try{
//         // const result2 =  await courseRecord.find({$and:[{courseType:'Frontend'},{ author:'Richa Maam'}]});
//         // const result2 =  await courseRecord.find({$and:[{courseType:'Frontend'},{ author:'Richa Maam'}]}).count();
        
        
//         // const result2 =  await courseRecord.find({$and:[{courseType:'Frontend'},{ author:'Richa Maam'}]}).sort({title:1});


//         const result2 =  await courseRecord.find({$and:[{courseType:'Frontend'},{ author:'Richa Maam'}]}).sort({title:-1});
//         console.log(result2);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getDocument()

//update data

// const updateDocument = async ()=>{
//     try{
//         const res = await courseRecord.updateOne({title:'HTML'},{$set:{author:'Yash Kapure'}})
//         const res2 =  await courseRecord.find({title:'HTML'})
//         console.log(res);
//         console.log(res2);
//     }
//     catch(err){
    //         console.log(err);
    //     }
    // }
    // updateDocument()
    const updateDocument = async (_id)=>{
        try{
        // const res = await courseRecord.updateOne({_id},{$set:{author:'Yash Kapure'}})
        const res = await courseRecord.findByIdAndUpdateOne({_id},{$set:{author:'Yash Kapure'}})

        const res2 =  await courseRecord.find({author:'Richa Maam'})
        
        
        console.log(res);
        console.log(res2);
    }
    catch(err){
        console.log(err);
    }
}
updateDocument('6405d8e0b0da0866b4437d84')