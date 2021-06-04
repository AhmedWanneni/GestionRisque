
const Risques = require('../models/Risques');


const router = require('express').Router();


router.route('/Risques').post(async (req, res) => {
    await Risques.create(req.body);
    res.json({status : 200});
});

router.route('/Risques').get(async (req, res) => {
    const result = await Risques.findAll();
    if (result === null) res.json({status : 400});
    else res.json(result);
});

router.route('/Risques/:id').delete(async (req, res) => {
    let id = req.params.id;
    await Risques.destroy({ where: { id: id } });
    res.json({ status: 200 });
});

router.route('/Risques/:id').patch(async (req, res) => {
    let id = req.params.id;
    let data = {
        id: id
    }
    const result = await Risques.findOne({ where: data });
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