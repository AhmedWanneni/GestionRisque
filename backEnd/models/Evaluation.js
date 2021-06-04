
const {Model , DataTypes} = require('sequelize');
const sequelize = require('../database');



class Evaluations extends Model {}

Evaluations.init({
    id : {type: DataTypes.NUMBER,primaryKey: true},
    valeur_intergrite : {type: DataTypes.NUMBER},
    valeur_confidentialite : {type : DataTypes.NUMBER},
    valeur_disponibilite : {type:DataTypes.NUMBER}

},{
    sequelize,
    modelName : 'Evaluations',
    timestamps : false
});

module.exports = Evaluations;