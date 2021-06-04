
const Admins = require('../models/Admins');


const router = require('express').Router();


router.route('/Admins').post(async (req, res) => {
    await Admins.create(req.body);
    res.json(req.body);
});

router.route('/Admins').get(async (req,res) => {
    const result = await Admins.findAll();
    res.send(result); 
});

router.route('/login/:matricule/:pass').get(async (req,res) => {
    let matricule = req.params.matricule;
    let pass = req.params.pass;
    let data = {
        matricule : matricule,
        pass : pass
    }
    const result = await Admins.findOne({where : data});
    if (result === null) res.json({status : 400});
    else res.send(result);
    
});

module.exports = router;