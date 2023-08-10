const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "User must have name"]
    },
    email: {
        type: String,
        required: [true, "User must have email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "User must have password"],
    },
})
const User = mongoose.model("User", userSchema)
module.exports = User;
