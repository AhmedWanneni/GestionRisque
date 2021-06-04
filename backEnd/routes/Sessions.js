
const Sessions = require('../models/Sessions');


const router = require('express').Router();


router.route('/Sessions').post(async (req, res) => {
    await Sessions.create(req.body);
    res.json({status : 200});
});

router.route('/Sessions').get(async (req, res) => {
    const result = await Sessions.findAll();
    if (result === null) res.json({status : 400});
    else res.json(result);
});

router.route('/Sessions/:id').delete(async (req, res) => {
    let id = req.params.id;
    await Sessions.destroy({ where: { id: id } });
    res.json({ status: 200 });
});

router.route('/Sessions/:id').patch(async (req, res) => {
    let id = req.params.id;
    let data = {
        id: id
    }
    const result = await Sessions.findOne({ where: data });
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