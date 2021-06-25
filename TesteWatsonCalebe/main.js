const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//bodyParser
app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())
//Rotas

app.get('/', function (req, res) {
  Post.findAll().then(function(posts){
    res.render('formulario', {posts: posts})
  })
})

app.post('/add', function (req, res) {
  Post.create({
    comentario: req.body.comentario
  }).then(function(){
    res.redirect('/')
  }).catch(function(erro){
    res.send('Houve um erro: ' + erro)
  })
})

app.post('/lista', function (req, res) {
  Post.findAll().then(function(posts){
    res.render('./text_to_speech', {posts: posts})
  }).then(function(){
    res.redirect('/')
  }).catch(function(erro){
    res.send('Houve um erro: ' + erro)
  })
})
//Conexão com a porta 8081
app.listen(8081, function(){
console.log("Servidor em execução!");
});
