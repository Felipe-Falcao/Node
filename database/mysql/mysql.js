const Sequelize = require('sequelize');

module.exports = app => {
    const sequelize = new Sequelize(
        process.env.DATABASE,
        process.env.USERMYSQL,
        process.env.PASSWORDMYSQL,
        {
            host: process.env.HOST,
            dialect: 'mysql'
        }
    );

    app.sequelize = Sequelize;
    app.mysql = sequelize;
}

//TEST
// sequelize.authenticate().then(() => {
//     console.log("Conectado com sucesso!");
// }).catch((error) => {
//     console.log("Erro\n" + error);
// });