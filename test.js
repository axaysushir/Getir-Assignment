const testdata = require('./mongodb/controllers/index')

// check if body contains data or not
test("Check body data", () => {
    expect(postData(req, res).toBe(Object))
})
