const assert = require('assert')
const User = require('../src/user')

describe('Delete a user', () => {
    // Create a user called Joe before each test
    let joe
    beforeEach((done) => {
        joe = new User({ name: 'Joe' })
        joe.save()
            .then(() => done())
    })


    it('Remove the user Joe through its instance', (done) => {
        joe.remove()
            .then(() => {
                return User.findOne({ name: 'Joe' })
            })
            .then((user) => {
                assert(user === null)
                done()
            })
        
    })

    it('Remove user Joe using the model class remove', (done) => {
        User.remove({ name: 'Joe' })
            .then(() => {
                return User.findOne({ name: 'Joe'})
            })
            .then((user) => {
                assert(user === null)
                done()
            })
    })

    it('Remove user Joe using the model class findOneAndRemove', (done) => {
        User.findOneAndRemove({ name: 'Joe'})
            .then(() => {
                return User.findOne({ name: 'Joe'})
            })
            .then((user) => {
                assert(user === null)
                done()
            })
    })

    it('Remove user Joe using the model class findByIdAndRemove', (done) => {
        User.findByIdAndRemove(joe._id)
            .then(() => {
                return User.findOne({ name: 'Joe' })
            })
            .then((user) => {
                assert(user === null)
                done()
            })
    })
})
