const {Model , DataTypes} = require('sequelize');
const sequelize = require('../database');



class Sessions extends Model {}

Sessions.init({
    id : {type: DataTypes.NUMBER,primaryKey: true},
    date_debut : {type : DataTypes.STRING},
    date_fin : {type : DataTypes.STRING}
    
},{
    sequelize,
    modelName : 'Sessions',
    timestamps : false
});

module.exports = Sessions;