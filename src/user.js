const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema( {
    name: String,
    postCount: Number
})

const User = mongoose.model('user', UserSchema)

module.exports = User