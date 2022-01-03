const testdata = require('./mongodb/controllers/index')

test("Check body data", () => {
    expect(postData(req, res).toBe(Object))
})