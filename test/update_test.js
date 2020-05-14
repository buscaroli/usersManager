const assert = require('assert')
const User = require('../src/user')

describe('Update a user named Joe', (done) => {
    let joe
    // Create a user named Joe before each test
    beforeEach((done) => {
        joe = new User({ name: 'Joe' }) 
        joe.save()
            .then(() => done())
    })


    // Recycling code
    function assertName(operation, done) {
        operation
        .then(() => {
            return User.find({})
        })
        .then((users) => {
            assert(users.length === 1)
            assert(users[0].name == 'Jane')
            done()
        })
    }

    it('Update user Joe to jane using the instance method set and save', (done) => {
        joe.set({ name: 'Jane' })
        // joe.save()
        //     .then(() => {
        //         return User.find({})
        //     })
        //     .then((users) => {
        //         assert(users.length === 1 &&
        //                 users[0].name === 'Jane')
        //         done()
        //     })
        assertName(joe.save(), done)
    })

    it('Update user Joe to jane using the instance method update', (done) => {
        assertName(joe.update({ name: 'Jane' }), done)
    })

    it('Update user named Joe to Jane using the model class update', (done) => {
        // User.update({ name : 'Joe' }, { name : 'Jane' })
        //     .then(() => {
        //         return User.find({})
        //     })
        //     .then((users) => {
        //         assert(users.length === 1)
        //         assert(users[0].name === 'Jane')
        //         done()
        //     })
        assertName(User.update({ name : 'Joe' }, { name : 'Jane' }), done)
    })

    it('Update user named Joe to Jane using the model class findByIdAndUpdate', (done) => {
        // User.findByIdAndUpdate(joe._id, { name: 'Jane' })
        // .then(() => {
        //     return User.find({})
        // })
        // .then((users) => {
        //     assert(users.length === 1)
        //     assert(users[0].name === 'Jane')
        //     done()
        // })
        assertName(User.findByIdAndUpdate(joe._id, { name: 'Jane' }), done)
    })

    it('Update user named Joe to Jane using the model class findOneAndUpdate', (done) => {
        // User.findOneAndUpdate({ name: 'Joe' }, { name: 'Jane' })
        // .then(() => {
        //     return User.find({})
        // })
        // .then((users) => {
        //     assert(users.length === 1)
        //     assert(users[0].name === 'Jane')
        //     done()
        // })
        assertName(User.findOneAndUpdate({ name: 'Joe' }, { name: 'Jane' }), done)
    })    
})