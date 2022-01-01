const mongoose = require('mongoose')

const AppSchema = mongoose.Schema({
    startDate: {type: Date},
    endDate: {type: Date},
    minCount: {type: Number, minimim: 2700},
    maxCount: {type: Number, maximum: 3000}
})

const response = mongoose.Schema({
    code: Number,
    msg: String,
    records: {type:Array}
})

module.exports = mongoose.model("App", AppSchema)
module.exports = mongoose.model("Res", response)