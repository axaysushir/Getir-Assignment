const App = require('../models/model')

exports.postdata = (req, res) => {
    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "data content can not be empty"
    //     });
    // }
    // send data
    console.log(req.body)
    const sendData = new App({
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        minCount: req.body.minCount,
        maxCount: req.body.maxCount,
    })

    sendData.save().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while sending data!"
        })
    })
}

exports.send = (req, res) => {
    const post = new App({
        code: req.body.code,
        msg: req.body.msg,
        records: req.body.record
    })
    post.save().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while sending data!"
        })
    })
}