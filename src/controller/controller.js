const db = require("../db/models");
const User = db.users;


exports.register = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => {
        console.log("User added.")
        res.send(user)
    })
}

exports.test = (req, res) => {
    res.status(201).json({"test": "did it work"})
}
