const User = require('../models/userModel');
const Bcrypt = require('bcryptjs')

exports.signup = async (req, res) => {
    try {
        if (req.body.password) {
            req.body.password = Bcrypt.hashSync(req.body.password, 12);
        }
        const user = await User.create(req.body)
        req.session.user = user;
        res.status(200).json({
            ok: true,
            data: { user }
        })
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: "somthing wrong!."
        })
    }
}

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            if (Bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = user;
                res.status(404).json({
                    ok: true,
                    data: { user }
                })
            }
        } else {
            res.status(404).json({
                ok: false,
                message: "user not exists."
            })
        }
    } catch (e) {
        res.status(400).json({
            ok: false,
            message: "somthing wrong!."
        })
    }
}