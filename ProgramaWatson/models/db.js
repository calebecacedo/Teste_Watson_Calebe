//Conexão com o Banco de Dados
const Sequelize = require('sequelize');
const sequelize = new Sequelize('testewatson', 'root', '12345678', {
  host: "localhost",
  dialect: 'mysql'
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}
