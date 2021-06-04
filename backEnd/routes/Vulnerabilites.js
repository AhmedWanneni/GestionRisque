
const Vulnerabilites = require('../models/Vulnerabilites');


const router = require('express').Router();


router.route('/Vulnerabilites').post(async (req, res) => {
    await Vulnerabilites.create(req.body);
    res.json({status : 200});
});

router.route('/Vulnerabilites').get(async (req, res) => {
    const result = await Vulnerabilites.findAll();
    if (result === null) res.json({status : 400});
    else res.json(result);
});

router.route('/Vulnerabilites/:id').delete(async (req, res) => {
    let id = req.params.id;
    await Vulnerabilites.destroy({ where: { id: id } });
    res.json({ status: 200 });
});

router.route('/Vulnerabilites/:id').patch(async (req, res) => {
    let id = req.params.id;
    let data = {
        id: id
    }
    const result = await Vulnerabilites.findOne({ where: data });
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