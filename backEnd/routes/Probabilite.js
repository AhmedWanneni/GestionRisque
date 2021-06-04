
const Probabilite = require('../models/Probabilite');


const router = require('express').Router();


router.route('/Probabilite').post(async (req, res) => {
    await Probabilite.create(req.body);
    res.json({status : 200});
});

router.route('/Probabilite').get(async (req, res) => {
    const result = await Probabilite.findAll();
    if (result === null) res.json({status : 400});
    else res.json(result);
});

router.route('/Probabilite/:id').delete(async (req, res) => {
    let id = req.params.id;
    await Probabilite.destroy({ where: { id: id } });
    res.json({ status: 200 });
});

router.route('/Probabilite/:id').patch(async (req, res) => {
    let id = req.params.id;
    let data = {
        id: id
    }
    const result = await Probabilite.findOne({ where: data });
    result.description = req.body.description;
    result.lieu = req.body.lieu;
    result.proprietaire = req.body.proprietaire;
    result.type = req.body.type;
    if (result === null)  {res.json({status:400});}
    else{
        await result.save();
        res.json({status : 200});}
});
module.exports = router;