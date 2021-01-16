require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USERMYSQL,
    process.env.PASSWORDMYSQL,
    {
        host: process.env.HOST,
        dialect: 'mysql'
    }
);

//TEST
// sequelize.authenticate().then(() => {
//     console.log("Conectado com sucesso!");
// }).catch((error) => {
//     console.log("Erro\n" + error);
// });