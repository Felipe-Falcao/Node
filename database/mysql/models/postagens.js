const Sequelize = require('sequelize');

module.exports = app => {
    const Postagem = app.mysql.define('postagens', {
        titulo: {
            type: app.sequelize.STRING
        },
        conteudo: {
            type: app.sequelize.TEXT
        },
    });
    
    Postagem.sync({force: true}); // Gerar a tabela no mysql

}
