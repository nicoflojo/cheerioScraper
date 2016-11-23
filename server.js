var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.get('/scrape', function(req, res) {

})

app.listen('2003');
console.log("magic happens on 2003");

exports = module.exports = app;
