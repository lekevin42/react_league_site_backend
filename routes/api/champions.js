const api = require('./api.js');

const router = require('express').Router();

router.get('/singlechampion/:ObjectId', (req, res, next) => {
  api.Champions.getSingleChampion(req.params.ObjectId).then((championData) => {
    return res.json({championData: championData});
  }).catch(next);
});


module.exports = router;
