
const Evaluation = require('../models/Evaluation');


const router = require('express').Router();


router.route('/Evaluation').post(async (req, res) => {
    await Evaluation.create(req.body);
    res.json({status : 200});
});

router.route('/Evaluation').get(async (req, res) => {
    const result = await Evaluation.findAll();
    if (result === null) res.json({status : 400});
    else res.json(result);
});

router.route('/Evaluation/:id').delete(async (req, res) => {
    let id = req.params.id;
    await Evaluation.destroy({ where: { id: id } });
    res.json({ status: 200 });
});

router.route('/Evaluation/:id').patch(async (req, res) => {
    let id = req.params.id;
    let data = {
        id: id
    }
    const result = await Evaluation.findOne({ where: data });
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