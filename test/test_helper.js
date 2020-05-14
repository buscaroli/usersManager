const mongoose = require ('mongoose')


// This function will be run only once, just before the
// mocha test suite starts executing the tests
before((done) => {
    mongoose.connect('mongodb://localhost/usersManager_test', { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection
        .once('open', () => { done() }) // once the connection is open mocha can start the tests
        .on('error', (error) => {
            console.log('Error: ', error)
        })
    

})


// This function will be run before each test
beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        done()
    })
    
})