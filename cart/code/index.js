const express = require('express'); // express framework
const bodyParser = require('body-parser');
const app = express(); // aplicando ela ao APP
const { mongoConnect } = require('./config/mongo/mongo');

//conecta no mongo
mongoConnect();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//rotas
// var api = require('./routes/api');
// app.use('/', api);

app.listen(process.env.CART_PORT, console.log(`Server listen on port ${process.env.CART_PORT}`));