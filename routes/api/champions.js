const router = require('express').Router();
const API_ROOT_SINGLE_CHAMPIONS = 'https://na1.api.riotgames.com/lol/static-data/v3/champions/  26?locale=en_US&champData=all&tags=all&api_key=RGAPI-b66a4d5a-88ee-4eed-82b2-3ff0b0d8e2d1'

router.get('/companies', (req, res, next) => {
    Company.find( (err, companies) => {
        return res.json({companies: companies});
    }).catch(next);
});



module.exports = router;
