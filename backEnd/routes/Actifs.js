
const Actifs = require('../models/Actifs');


const router = require('express').Router();


router.route('/Actifs').post(async (req, res) => {
    await Actifs.create(req.body);
    res.json({status : 200});
});

router.route('/Actifs').get(async (req, res) => {
    const result = await Actifs.findAll();
    if (result === null) res.json({status : 400});
    else res.json(result);
});

router.route('/Actifs/:id').delete(async (req, res) => {
    let id = req.params.id;
    await Actifs.destroy({ where: { id: id } });
    res.json({ status: 200 });
});

router.route('/Actifs/:id').patch(async (req, res) => {
    let id = req.params.id;
    let data = {
        id: id
    }
    const result = await Actifs.findOne({ where: data });
    result.description = req.body.description;
    result.lieu = req.body.lieu;
    result.proprietaire = req.body.proprietaire;
    result.type = req.body.type;
    if (result === null)  {res.json({status:400});}
    else{
        await result.save();
        res.json({status : 200});}
});
router.route('/Actifs/id_session/:id_session').get(async (req, res) => {
    let id_session = req.params.id_session;
    let data = {
        id_session: id_session
    }
    const result = await Actifs.findOne({ where: data });
    if (result === null) res.json({status : 400});
    else res.json(result);
});
module.exports = router;