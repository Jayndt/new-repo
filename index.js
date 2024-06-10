const express = require('express')

const users = [{
    username : "harkirat",
    kidney: [{
        Healthy : false,
    }]
}];

const app = express();
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
    let count = 0;
    const harkiratKidneys = users[0].kidney;
    const numberofkidneys = harkiratKidneys.length;
    let numofhealthykidneys = 0;
    for(let i =0; i<harkiratKidneys.length; i++){
        if(harkiratKidneys[i].Healthy == true){
            numofhealthykidneys = numofhealthykidneys +1;
        }
    }

    const numofunhealthykidneys =numberofkidneys - numofhealthykidneys;
    res.json({
        harkiratKidneys,
        numberofkidneys,
        numofhealthykidneys,
        numofunhealthykidneys
    })
    
})

app.post('/', (req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        Healthy: isHealthy
    })

    res.json({
        msg: "Done"
    })
})

app.put("/", (req, res) =>{
    for(let i = 0; i<users[0].kidney.length; i++){
        users[0].kidney[i].Healthy = true;
    }
    res.json({});
})

app.delete("/", (req, res) =>{
    const newKidneys = [];
    for(let i = 0; i<users[0].kidney.length; i++){
        if(users[0].kidney[i].Healthy){
            newKidneys.push({
                Healthy: true
            })
        }
    }
    users[0].kidney = newKidneys;
    res.json({});
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})