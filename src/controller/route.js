module.exports = function(app) {
    const users = require('../controller/controller');

    app.post('/register', users.register);
    app.get('/getall', users.getall);
}