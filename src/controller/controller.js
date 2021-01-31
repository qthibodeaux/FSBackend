const db = require("../db/models");
const User = db.users;
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    try {
        const hashpassword = await bcrypt.hash(req.body.password, 10)

        User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashpassword
        }).then(user => {
            console.log("User added.")
            res.send(user)
        })
    } catch (err) {
        console.log(err)
        res.status(500).send()
    }


    

    
}

exports.test = (req, res) => {
    res.status(201).json({"test": "did it work"})
}
