var express = require("express");
var app = express.createServer();
var mongo = require('mongoskin');

var db = mongo.db('localhost:27017/blog');

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  res.render('index', { posts: posts });
});

var posts = {};
function updatePosts() {
  db.collection('posts').find().toArray(function(err, result) {
    console.log(result);
    posts = result;
  });
}

updatePosts();

app.listen(8000);
