const express = require ('express');
const cookieParser = require ('cookie-parser');
const app = express();
const host = 'localhost';
const port = 8080;

app.use(cookieParser());
app.use(express.urlencoded({extende: true}));



//Rotas GET
app.get('/Inicio', (req, res) => {
    res.send('Calculadora node JS!' +" "+'Para escolher a Operação digite:');
    res.send('Para escolher a Operação digite:!');
    res.send('sub (subtração)');
    res.send('mult (Multiplicação)');
    res.send('div (Divisão)');
    res.send('rest (Resto da divisão)');
    res.send('Na URL "http://localhost:8080/" '); 
});


//Soma
app.get('/soma', (req, res) => {
    const { num1, num2 } = req.body;
    const result = parseFloat(num1) + parseFloat(num2);
    res.send({ result });
});

//Subtração
app.get('/sub', (req, res) => {
    const { num1, num2 } = req.body;
    const result = (num1) - (num2);
    res.send({ result });
});

//Multiplicação
app.get('/mult', (req, res) => {
    const { num1, num2 } = req.body;
    const result = (num1) *(num2);
    res.send({ result });
});

//Divisão
app.get('/div', (req, res) => {
    const { num1, num2 } = req.body;
    const result = parseFloat(num1) / parseFloat(num2);
    res.send({ result });
});

//Resto da Divisão
app.get('/div', (req, res) => {
    const { num1, num2 } = req.body;
    const result = parseFloat(num1) % parseFloat(num2);
    res.send({ result });
});


app.get('/', (req, res) => {
    res.type('text/plain');
    if (req.cookies.know === undefined){
        res.cookie('know','1');
        res.send('Seja Bem-Vindo, novo visitante!')
    } else {
        res.send('Seja bem-vindo novamente, visitate!');
    }
});

app.listen(port, host, () => {
    console.log(`Server ready at http://${host}:${port}`);
});