const user = require('../db/models/user');

module.exports = function(app) {
    const users = require('../controller/controller');

    app.post('/register', users.register);
    app.post('/login', users.login);
    app.get('/getall', users.getall);
}