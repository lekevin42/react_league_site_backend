const superagent = require('./api.js');

const router = require('express').Router();

router.get('/singlechampion/:ObjectId', (req, res, next) => {
  superagent.getSingleChampion(req.params.ObjectId).then((body) => {
    res.json({body: body});
  }).catch(next);
});


module.exports = router;
