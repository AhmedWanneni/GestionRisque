const {Model , DataTypes} = require('sequelize');
const sequelize = require('../database');



class Admins extends Model {

}

Admins.init({
    id : {type: DataTypes.NUMBER,primaryKey: true},
    nom : {type: DataTypes.STRING},
    prenom : {type : DataTypes.STRING},
    matricule : {type:DataTypes.NUMBER},
    pass: {type:DataTypes.STRING}
},{
    sequelize,
    modelName : 'Admins',
    timestamps : false
});

module.exports = Admins;