const db = require("../db/models");
const User = db.users;
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
    const emailCheck = await User.findOne({
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

exports.login= async (req, res) => {
    let getUser = await User.findOne({
        where: {email: req.body.email}
    })

    if (!getUser) return res.status(400).send('User is not found.')

    const isValid = await bcrypt.compare(req.body.password, getUser.dataValues.password)
    if (!isValid) return res.status(400).send('The password is incorrect.')

    res.send(getUser.dataValues)
}

exports.getall = async (req, res) => {
    const errb = await User.findAll();
    try {
        console.log("All users: ", JSON.stringify(err, null, 2));
        res.status(500).send()
    } catch{
        res.status(500).send()
    }
}