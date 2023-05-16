const {users, greet} = require('test-mock-api-call-silvio') 

console.log(greet('Silvio'));

users()
    .then(res => console.log(res))
    .catch(err => console.log(err))