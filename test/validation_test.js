const assert = require('assert')
const User = require('../src/user')

describe('Validating records', () => {
    
    it('requires a user name', () => {
        const user = new User({ name: undefined })
        const isValid = user.validateSync()
        const { message } = isValid.errors.name
        assert(message === 'Name is required.')
    })

    it('requires the name to be at least 3 charactes long', () => {
        const user = new User({ name: 'ac' })
        const isValid = user.validateSync()
        const { message } = isValid.errors.name
        assert(message === 'Name must be at least 3 characters long.')
    })

    it('prevents invalid records from being saved to the database', () => {
        const user = new User({ name: 'AC' })
        user.save()
            .catch((e) => {
                const { message } = e.errors.name
                assert(message = 'Name must be at least 3 characters long.')
            })
    })
})