const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());



const sequelize = require('./database');

sequelize.sync({force:true}).then(() => console.log("you are connected to database"));

// =========================================================================================
//sequelize.sync({force : true}).then(() => console.log("you are connected to database"));
// this for deleting old database and make new one
// =========================================================================================


const Admins = require('./routes/Admins');
const Actifs = require('./routes/Actifs');
const Evaluation = require('./routes/Evaluation');
const Impacts = require('./routes/Impacts');
const Menaces = require('./routes/Menaces');
const Probabilite = require('./routes/Probabilite');
const Risques  = require('./routes/Risques');
const Sessions = require('./routes/Sessions');
const Vulnerabilite = require('./routes/Vulnerabilites');


app.use('/',Admins); 
app.use('/',Actifs); 
app.use('/',Evaluation); 
app.use('/',Menaces); 
app.use('/',Impacts); 
app.use('/',Probabilite); 
app.use('/',Risques); 
app.use('/',Sessions); 
app.use('/',Vulnerabilite); 




app.listen(5000,() => console.log("listenning port 5000"));