const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('test','','',{
    dialect : 'sqlite',
    host : './dev.sqlite'
});

module.exports = sequelize;