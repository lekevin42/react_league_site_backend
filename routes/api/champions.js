const api = require('./api.js');
const mongoose = require('mongoose');
const router = require('express').Router();
const ChampionHeader = mongoose.model('ChampionHeader');
const Champion = mongoose.model('Champion');
const ChampionStats = mongoose.model('ChampionStats');
const ChampionSpells = mongoose.model('ChampionSpells');

router.get('/champions/championheader', (req, res, next) => {
  ChampionHeader.find({}, function(err, championHeader){
    if (err){
      return res.status(200).json({
          success: {
              data: championData,
              header: championHeader
          }
      });
    }
    return res.status(200).json({
        success: {
            header: championHeader
        }
    });
  });
});

router.get('/singlechampion/:ObjectId', (req, res, next) => {
  api.Champions.getSingleChampion(req.params.ObjectId).then((championData) => {
    return res.json({championData: championData});
  }).catch(next);
});

router.get('/champions/all', (req, res, next) => {
  api.Champions.getAllChampions().then((championData) => {
    let championHeader = new ChampionHeader();

    championHeader.keys = championData.keys;
    championHeader.version = championData.version;


    Object.keys(championData.data).forEach((champKey) => {
      let champion = new Champion();
      let championStats = new ChampionStats();

      let championSpellsList = [];


      /* Begin Champion Stats Section */
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

      /* End Champion Stats Section */


      /* Begin Champion Spells Section */

      const {spells} = championData.data[champKey];

      spells.forEach((spell) => {
        let championSpells = new ChampionSpells();

        championSpells.cooldown = spell.cooldown;
        championSpells.cooldownBurn = spell.cooldownBurn;
        championSpells.cost = spell.cost;
        championSpells.costBurn = spell.costBurn;
        championSpells.costType = spell.costType;
        championSpells.description = spell.description;
        championSpells.effect = spell.effect;
        championSpells.effectBurn = spell.effectBurn;
        championSpells.key = spell.key;
        championSpells.maxRank = spell.maxrank;
        championSpells.name = spell.name;
        championSpells.range = spell.range;
        championSpells.rangeBurn = spell.rangeBurn;
        championSpells.resource = spell.resource;
        championSpells.sanitizedDescription = spell.sanitizedDescription;
        championSpells.sanitizedTooltip = spell.sanitizedTooltip;
        championSpells.tooltip = spell.tooltip;
        championSpells.vars = spell.vars;

        //championSpellsList.push(championSpells);
        champion.spells.push(championSpells);
        championSpells.save();
      });



      /* End Champion Spells Section */


      /* Begin Champion Section */
      champion.allyTips = championData.data[champKey].allytips;
      champion.blurb = championData.data[champKey].blurb;
      champion.enemyTips = championData.data[champKey].enemytips;
      champion.id = championData.data[champKey].id;
      champion.key = championData.data[champKey].key;
      champion.lore = championData.data[champKey].lore;
      champion.name = championData.data[champKey].name;
      champion.stats = championStats;
      champion.parType = championData.data[champKey].partype;
      champion.tags = championData.data[champKey].tags;
      champion.title = championData.data[champKey].title;

      champion.save();

      championHeader.championData.push(champion);



      /* End Champion Section */
    });

    championHeader.save();
    return res.status(200).json({
        success: {
            data: championData,
            header: championHeader
        }
    });
  }).catch(next);
});

router.delete('/champions/deleteall', (req, res, next) => {
  ChampionStats.remove({}, function(err) {
    if (err) return res.status(501);
  });

  ChampionSpells.remove({}, function(err){
    if (err) return res.status(501);
  });

  Champion.remove({}, function(err){
    if (err) return res.status(501);
  });

  ChampionHeader.remove({}, function(err){
    if (err) return res.status(501);
  });

  return res.status(200).json({
      success: {

      }
  });
});


module.exports = router;
