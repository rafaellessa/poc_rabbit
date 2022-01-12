const express = require('express'); // express framework
const bodyParser = require('body-parser');
const app = express(); // aplicando ela ao APP
const { mongoConnect } = require('./config/mongo/mongo');

//conecta no mongo
mongoConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(process.env.CHECKOUT_PORT, console.log(`Server listen on port ${process.env.CHECKOUT_PORT}`));