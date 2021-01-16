module.exports = app => {
    const Usuario = app.mysql.define('usuarios', {
        nome: {
            type: Sequelize.STRING
        },
        sobrenome: {
            type: Sequelize.STRING
        },
        idade: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        }
    })

}