const express = require ('express');
const cookieParser = require ('cookie-parser');
const app = express();
const host = 'localhost';
const port = 8080;

app.use(cookieParser());
app.use(express.urlencoded({extende: true}));

//Rotas POST
app.post('/', (req, res )=> {
    res.type('text/plain');
    res.send(req.body.message + " - " + req.body.nome);
});
app.post('/echo', (req, res )=> {
    res.type('text/plain');
    res.send("ECHO: " + req.body.message + " - " + req.body.nome);
});
app.post('/echo/:message', (req, res )=> {
    res.type('text/plain');
    res.send("ECHO2: " + req.params.message);
});

//Rotas GET
app.get('/', (req, res) => {
    res.type('text/plain');
    if (req.cookies.know === undefined){
        res.cookie('know','1');
        res.send('Seja Bem-Vindo, novo visitante!')
    } else {
        res.send('Seja bem-vindo novamente, visitate!');
    }
});

app.get('/agent', (req, res) => {
    res.type('text/plain');
    res.send(req.headers['user-agent']);
});


//Rotas
app.get('/', (req, res) => {
    res.send(`Teste ok`);
});

app.get('/mensagem', (req, res) => {
    res.send(`Chega Natal!!`);
});
app.get('/curso', (req, res) => {
    res.send(`Tecnico de informática para a internet!!`);
});

app.listen(port, host, () => {
    console.log(`Server ready at http://${host}:${port}`);
});