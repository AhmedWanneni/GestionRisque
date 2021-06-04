
const Impacts = require('../models/Impacts');


const router = require('express').Router();


router.route('/Impacts').post(async (req, res) => {
    await Impacts.create(req.body);
    res.json({status : 200});
});

router.route('/Impacts').get(async (req, res) => {
    const result = await Impacts.findAll();
    if (result === null) res.json({status : 400});
    else res.json(result);
});

router.route('/Impacts/:id').delete(async (req, res) => {
    let id = req.params.id;
    await Impacts.destroy({ where: { id: id } });
    res.json({ status: 200 });
});

router.route('/Impacts/:id').patch(async (req, res) => {
    let id = req.params.id;
    let data = {
        id: id
    }
    const result = await Impacts.findOne({ where: data });
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