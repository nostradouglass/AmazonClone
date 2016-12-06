var express = require('express')
var morgan = require('morgan')
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://root:abc123@ds119748.mlab.com:19748/ecommerce', function(err){
    if (err) console.log(err);
    console.log('Connected to database')
})

app.use(morgan('dev'));


app.get('/',(req, res) => {
var name = 'Batman'
res.json("My name is " + name );
})

app.get('/catname' , (req, res) => {
    res.json("batman");
});

app.listen(3000, (err) => {
    if (err) throw err;
    console.log("Server is running");
});

