const api = require('./api.js');
const mongoose = require('mongoose');
const router = require('express').Router();
const ChampionHeader = mongoose.model('ChampionHeader');
const Champion = mongoose.model('Champion');
const ChampionStats = mongoose.model('ChampionStats');

router.get('/singlechampion/:ObjectId', (req, res, next) => {

  api.Champions.getSingleChampion(req.params.ObjectId).then((championData) => {
    return res.json({championData: championData});
  }).catch(next);
});

router.get('/champions/all', (req, res, next) => {
  api.Champions.getAllChampions().then((championData) => {


    let championHeader = new ChampionHeader();

    //championHeader.championData = championData;
    //console.log(champion);


    Object.keys(championData.data).forEach((champKey) => {
      let champion = new Champion();
      let championStats = new ChampionStats();


      champion.allyTips = championData.data[champKey].allytips;
      champion.blurb = championData.data[champKey].blurb;
      champion.enemyTips = championData.data[champKey].enemytips;
      champion.id = championData.data[champKey].id;
      /*
      image
      info

      */
      champion.key = championData.data[champKey].key;
      champion.lore = championData.data[champKey].lore;
      champion.name = championData.data[champKey].name;
      champion.parType = championData.data[champKey].partype;


      /* Champion Stats Section */
      championStats.armor = championData.data[champKey].stats.armor;
      championStats.armorPerLevel = championData.data[champKey].stats.armorperlevel;
      championStats.attackDamage = championData.data[champKey].stats.attackdamage;
      championStats.attackDamagePerLevel = championData.data[champKey].stats.attackdamageperlevel;
      championStats.attackRange = championData.data[champKey].stats.attackrange;
      championStats.attackSpeedOffset = championData.data[champKey].stats.attackspeedoffset;
      championStats.attackSpeedPerLevel = championData.data[champKey].stats.attackspeedperlevel;
      championStats.crit = championData.data[champKey].stats.crit;
      championStats.critPerLevel = championData.data[champKey].stats.critperlevel;
      championStats.hp = championData.data[champKey].stats.hp;
      championStats.hpPerLevel = championData.data[champKey].stats.hpperlevel;
      championStats.hpRegen = championData.data[champKey].stats.hpregen;
      championStats.moveSpeed = championData.data[champKey].stats.movespeed;
      championStats.mp = championData.data[champKey].stats.mp;
      championStats.mpRegenPerLevel = championData.data[champKey].stats.mpregenperlevel;
      championStats.spellBlock = championData.data[champKey].stats.spellblock;
      championStats.spellBlockPerLevel = championData.data[champKey].stats.spellblockperlevel;

      championStats.save();

      champion.tags = championData.data[champKey].tags;
      champion.title = championData.data[champKey].title;




      champion.save();

    });
    return res.status(200).json({
        success: {
            data: championData,
            header: championHeader
        }
    });
    /*
    champion.allyTips = championData.data.allytips;
    champion.blurb = championData.data.blurb;
    champion.enemyTips = championData.data.enemytips;
    champion.id = championData.data.id;
    //champion.markModified(championData);

    champion.save();/*  function (err) {
      console.log(err);

      championHeader.championData = champion;



      championHeader.version = championData.version;
      championHeader.keys = championData.keys;
      championHeader.save(function (err) {
        console.log(err);
        //return res.json({championData: championHeader});
        return res.status(200).json({
            success: {
                data: championData,
                header: championHeader
            }
        });
      });

    })
*/


//return res.json({championData: championHeader});
  }).catch(next);
});


module.exports = router;
