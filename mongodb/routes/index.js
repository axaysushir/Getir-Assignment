module.exports = (app) => {
    const App = require("../controllers/index.js")
    app.post('/postdata', App.postdata)
    app.post('/post', App.send)

}