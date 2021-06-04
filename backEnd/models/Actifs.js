
const {Model , DataTypes} = require('sequelize');
const sequelize = require('../database');



class Actifs extends Model {}

Actifs.init({
    id : {type: DataTypes.NUMBER,primaryKey: true},
    id_session : {type: DataTypes.NUMBER},
    description : {type: DataTypes.STRING},
    lieu : {type : DataTypes.STRING},
    proprietaire : {type:DataTypes.STRING},
    type: {type:DataTypes.STRING},
    integrite: {type:DataTypes.STRING},
    disponibilite: {type:DataTypes.STRING},
    confidentaialite: {type:DataTypes.STRING},
    mesure: {type:DataTypes.STRING},
    valeur: {type:DataTypes.STRING}
},{
    sequelize,
    modelName : 'Actifs',
    timestamps : false
});

module.exports = Actifs;