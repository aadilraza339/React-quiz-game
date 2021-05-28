
require('dotenv').config();
var knex = require('knex')({
    client:"mysql",
    connection:{
        user:'codechef',
        host:"localhost",
        password:'ccdevs',
        database:'QUIZ'
    }
})

module.exports=knex