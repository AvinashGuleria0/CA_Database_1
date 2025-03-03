const express = require('express')
const Restaurant = require('./restaurantSchema')
const Item = require('./itemschema')
const app = express();
app.use(express.json())
const Port = 8000

app.get('/', (req, res) => {
    res.send(`Restaurant`)
})



app.listen(Port, () => {
    try{
        console.log(`Connected to server http://localhost:${Port}`)
    }catch(err){
        console.log(err)
    }
})