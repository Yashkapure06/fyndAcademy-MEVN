const express = require('express');
const app = express();
const PORT = 3000;

require('./src/db/conn')
const MensRanking = require('./src/models/cricket');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
})
 // const addingRecord =  new MensRanking({
        //     ranking: req.body.ranking,
        //     name: req.body.name,
        //     runs: req.body.runs,
        //     balls: req.body.balls,
        //     fours: req.body.fours,
        //     sixes: req.body.sixes,
        //     sr: req.body.sr,
        //     team: req.body.team,
        //     opposition: req.body.opposition,
        //     matchDate: req.body.matchDate
        // });
app.post('/menscricket', async (req, res) => {
    try{
       
        const addingRecord =  req.body;
        const result = await MensRanking.insertMany(addingRecord);
        console.log(result);
        addingRecord.save();        
    }
    catch(err){
        console.log(err);
    }
})

// app.get('/menscricketinfo', async (req, res) => {
//     try{
//         const getmensinfo = await MensRanking.find({});
//         res.send(getmensinfo);
//     }
//     catch(err){
//         console.log(err);
//     }
// })

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})
