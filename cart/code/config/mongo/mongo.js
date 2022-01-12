const mongoose = require('mongoose');
const log4js = require("log4js");

let log = log4js.getLogger();
log.level = "debug";

//variaveis para conectar no mongo
const {
    MONGODB_USERNAME,
    MONGODB_PASSWORD,
    MONGODB_HOST,
    MONGODB_PORT,
    MONGODB_DATABASE
} = process.env;

//parâmetros de conexão no mongo
const options = {
    useNewUrlParser: true,
    connectTimeoutMS: 10000,
    useUnifiedTopology: true
};

//url da conexão usando as varíaveis e parâmetros definidos anteriormente
const url = `mongodb://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}?authSource=admin`;

/**
 * faz e retorna a conexão ao mongo usando a url definida anteriormente
 */
const mongoConnect = async () => {

    log.debug('Vai conectar no mongo');

    try {
        await mongoose.connect(url, options).then( function() {
            log.debug('Conectou no mongo');
        })

    } catch (err) {
        log.error(`Ocorreu um erro ao conectar no mongo ${err}`);
    }
}

module.exports = { mongoConnect }