const assert = require('assert')
const User = require('../src/user')


describe('Read users stored in the Database', () => {
    let joe
    // Creating a user called Joe before performing each test
    beforeEach((done) => {
        joe = new User({ name: 'Joe' })
        joe.save()
           .then(() => done())
    })
    
    it('find all users with a name of joe', (done) => {
        User.find({ name: "Joe" })
            .then((users) => {
                assert(users[0]._id.toString() === joe._id.toString())
                
                done()
            })
    })

    it('find a user with a particular id', (done) => {
        User.findOne({ _id: joe._id })
            .then((user) => {
                assert(user.name === 'Joe')
                done()
            })
    })

})