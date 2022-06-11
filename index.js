var express = require("express");
var app = express();
var { autor, livro } = require("./models");
let cors = require('cors')
app.use(cors())

app.use((req, res, next) => {
  console.log("Acessou o servidor"); res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next()
})
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))


app.get("/autores", async function(req, res) {
  var resultado = await autor.findAll();
  res.json(resultado);
})

app.get("/autores/:id/livros", async function(req, res) {
  let resultado = await autor.findByPk(req.params.id, {
    include: "livros"
  })
  res.json(resultado.livros);
})

app.get("/livros/:id/autor", async function(req, res) {
  let resultado = await livro.findByPk(req.params.id, {
    include: "autor"
  })
  res.json(resultado.autor);
})

app.post("/autores", async function(req, res) {
  var resultado = await autor.create(req.body);
  res.json(resultado);
})

app.put("/autores/:id", async function(req, res) {
  var resultado = await autor.update(req.body ,{
    where: {
      id:
        req.params.id
    }
  } );
  res.json(resultado)
})

app.delete("/autores/:id", async function(req, res) {
  var resultado = await autor.destroy({ where: { id: req.params.id } });
  res.json(resultado)
})

app.get("/autores/:id", async function(req, res) {
  var resultado = await autor.findByPk(req.params.id);
  res.json(resultado)
})

app.get("/livros", async function(req, res) {
  var resultado = await livro.findAll();
  res.json(resultado);
})

app.post("/livros", async function(req, res) {
  var resultado = await livro.create(req.body);
  res.json(resultado);
})

app.put("/livros/:id", async function(req, res) {
  var resultado = await livro.update(req.body, {
    where:{
      id: req.params.id
    }
  });

  res.json(resultado)
})

app.delete("/livros/:id", async function(req, res) {
  var resultado = await livro.destroy({ where: { id: req.params.id } });
  res.json(resultado)
})
app.get("/livros/:id", async function(req, res) {
  var resultado = await livro.findByPk(req.params.id);
  res.json(resultado)
})

app.listen(3333, function() {
  console.log("O código está funcionando");
});
