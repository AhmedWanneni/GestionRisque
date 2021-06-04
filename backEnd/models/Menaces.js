const {Model , DataTypes} = require('sequelize');
const sequelize = require('../database');



class Menaces extends Model {}

Menaces.init({
    id : {type: DataTypes.NUMBER,primaryKey: true},
    id_actif : {type: DataTypes.NUMBER},
    description : {type: DataTypes.STRING},
    acces : {type : DataTypes.STRING},
    acteur : {type:DataTypes.STRING},
    type : {type:DataTypes.STRING},
    motivation : {type:DataTypes.STRING},
    resultat : {type:DataTypes.STRING},
    incident_passe : {type:DataTypes.STRING},
    valeur : {type:DataTypes.NUMBER},
    
},{
    sequelize,
    modelName : 'Menaces',
    timestamps : false
});

module.exports = Menaces;