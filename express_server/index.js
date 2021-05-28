var express = require('express');
var cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors());

require('dotenv').config()

var usersRouter = require('./routers/users');


app.use('/', usersRouter);


// server running
app.listen(process.env.PORT || 3000, () => {
    console.log("Node server started");
});

module.exports = app;