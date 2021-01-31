module.exports = function(app) {
    const users = require('../controller/controller');

    app.get('/test', users.test)
    app.post('/register', users.register)
}