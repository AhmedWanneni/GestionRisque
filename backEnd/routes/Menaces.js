
const Menaces = require('../models/Menaces');


const router = require('express').Router();


router.route('/Menaces').post(async (req, res) => {
    await Menaces.create(req.body);
    res.json({status : 200});
});

router.route('/Menaces').get(async (req, res) => {
    const result = await Menaces.findAll();
    if (result === null) res.json({status : 400});
    else res.json(result);
});

router.route('/Menaces/:id').delete(async (req, res) => {
    let id = req.params.id;
    await Menaces.destroy({ where: { id: id } });
    res.json({ status: 200 });
});

router.route('/Menaces/:id').patch(async (req, res) => {
    let id = req.params.id;
    let data = {
        id: id
    }
    const result = await Menaces.findOne({ where: data });
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