const {Model , DataTypes} = require('sequelize');
const sequelize = require('../database');



class Risques extends Model {}

Risques.init({
    id : {type: DataTypes.NUMBER,primaryKey: true},
    id_actif : {type: DataTypes.NUMBER},
    type : {type : DataTypes.STRING},
    occurence : {type : DataTypes.NUMBER},
    OrdrePriorite : {type: DataTypes.NUMBER},
    valeur : {type:DataTypes.NUMBER},
    solution : {type:DataTypes.STRING}
},{
    sequelize,
    modelName : 'Risques',
    timestamps : false
});

module.exports = Risques;