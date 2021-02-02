const db = require("../db/models");
const User = db.users;
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
    const emailCheck = await db.users.findOne({
        where: {email: req.body.email}
    })

    if (emailCheck === null) {
        try {
            const hashpassword = await bcrypt.hash(req.body.password, 10)
    
            User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashpassword
            }).then(user => {
                res.send(user)
            })
        } catch (err) {
            console.log(err)
            res.status(500).send()
        }    
    } else {
        res.status(500).send()
    }

    
}

exports.getall = async (req, res) => {


    db.users.findAll({
        attributes: ['email']
    })
        .then(users => {
            res.json(users);
        });
};