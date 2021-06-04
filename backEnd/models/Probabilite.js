const {Model , DataTypes} = require('sequelize');
const sequelize = require('../database');



class Probabilites extends Model {}

Probabilites.init({
    id : {type: DataTypes.NUMBER,primaryKey: true},
    description : {type: DataTypes.STRING},
    type : {type:DataTypes.STRING},
    valeur : {type:DataTypes.NUMBER}
    
},{
    sequelize,
    modelName : 'Probabilites',
    timestamps : false
});

module.exports = Probabilites;