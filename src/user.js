const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema( {
    name: {
        type: String,
        min: 3,
        required: [true, 'Name is required.'],
        validate: {
            validator: (name) => {
                return name.length > 2
            },
            message: 'Name must be at least 3 characters long.'
        }
    },
    postCount: Number
})

const User = mongoose.model('user', UserSchema)

module.exports = User