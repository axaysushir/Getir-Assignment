const App = require('../models/model')

exports.postdata = async (req, res, next) => {
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
        console.log("DATA FROM SERVER", data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something went wrong while sending data!"
        })
    })

    // have tried below code also but it retuns empty array as response

    // try {
    //     const sendinfo = await App.find()
    //     console.log(sendinfo);
    //     return res.status(200).json({sendinfo})
    //     // return res.status(200).json({
    //     //     code: 0,
    //     //     msg: "Success",
    //     //     records: sendinfo
    //     // })
    // } catch (error) {
    //     console.log(error)
    //     return res.status(500).json({
    //         success: false,
    //         error: "Server error"
    //       });
    // }
}

// exports.send = (req, res) => {
//     const post = new App({
//         code: req.body.code,
//         msg: req.body.msg,
//         records: req.body.record
//     })
//     post.save().then(data => {
//         res.send(data)
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Something went wrong while sending data!"
//         })
//     })
// }