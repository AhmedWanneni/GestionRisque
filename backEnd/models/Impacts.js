const {Model , DataTypes} = require('sequelize');
const sequelize = require('../database');



class Impacts extends Model {}

Impacts.init({
    id : {type: DataTypes.NUMBER,primaryKey: true},
    id_actif : {type: DataTypes.NUMBER},
    description : {type: DataTypes.STRING},
    type : {type : DataTypes.STRING},
    valeur : {type:DataTypes.NUMBER},
},{
    sequelize,
    modelName : 'Impacts',
    timestamps : false
});

module.exports = Impacts;