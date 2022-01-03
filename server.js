const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { db } = require('./mongodb/models/model')
mongoose.Promise = global.Promise

const app = express()

// const uri = 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true'
const uri = 'mongodb://localhost:27017/fake'
mongoose.connect(uri, {
    useNewUrlParser: true,
}).then(() => {
    console.log("Sucessfully connected to the database")
}).catch(err => {
    console.error(err)
    console.error("Could not connect to the database..")
    process.exit() // treminate process
})

// mongoose.connect(uri, (db, err) => {
//     if (err) {
//         throw err;
//     }
//     db.createCollection('testdata', (err, collection) =>{ 
//         if (err) console.log(err)
//         console.log(collection)
//         console.log("Collection creatd")
//     })
// })
// db.createCollection('test', (err, collection) => {
//     console.log('COLLECTION CREATED: ',collection)
//     if (err) console.log(err);
// })
app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Server is running :D"})
})

var PORT = 5000;
require("./mongodb/routes/index")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})