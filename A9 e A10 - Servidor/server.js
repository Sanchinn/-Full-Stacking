require ("colors")
var http = require("http")
var express = require("express")
var bodyParser = require("body-parser")
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const url = "mongodb://gabrielhenriqueps70_db_user:<db_password>@ac-kw7hdei-shard-00-00.xfxhrct.mongodb.net:27017,ac-kw7hdei-shard-00-01.xfxhrct.mongodb.net:27017,ac-kw7hdei-shard-00-02.xfxhrct.mongodb.net:27017/?ssl=true&replicaSet=atlas-mofqlm-shard-0&authSource=admin&appName=Test";
const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("exemplo_bd");
var usuarios = dbo.collection("usuarios");


app.post("/Cadastrar_usuario", function(req,res) {
    
    var data = {
        db_nome: req.body.nome,
        db_login: req.body.login,
        db_senha: req.body.senha
    }

    usuarios.insertOne(data, function (err) {
        if (err) {
            response.render('resposta_usuario', {resposta: 'Erro ao cadastrar usuário!'})
        }else {
            response.render('resposta_usuario', {resposta: 'Usuário cadastrado com sucesso!'})
        };
    });

});


var app = express()
app.use(express.static("./public"))
app.use(bodyParser.urlencoded({extend: false}))
app.use(bodyParser.json())

var server = http.createServer(app)
server.listen(80)

console.log("Servidor Rodando...".rainbow)

app.get("/", function(req,res){
    res.redirect("A1 - HTML/index.html")
})

app.get("/inicio", function(req,res){
    var text = req.query.text;
    var number = req.query.number;
    var color = req.query.color;
    console.log(text,number,color)
    console.log("requisição feita por GET")
})

app.post("/inicio", function(req,res){   
    var text = req.body.text;
    var number = req.body.number;
    var color = req.body.color;
    console.log(text,number,color)
    console.log("requisição feita por POST")
})

app.post("/cadastro", function(req, res){
    var nome = req.body.nome;
    var login = req.body.login;
    var senha = req.body.senha;
    console.log(nome,login,senha);
    res.render("resposta.ejs",
        {resposta: "Usuário cadastrado com sucesso!"})
})

app.set('view engine', 'ejs');
app.set('views', './views');

app.get("/for", function(req,res){
    var qtde = req.query.qtde;
    res.render("exemplo_for.ejs",{qtde})
})

