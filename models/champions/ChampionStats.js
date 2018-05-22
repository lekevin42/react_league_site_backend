const mongoose = require('mongoose');


const ChampionStatsSchema = new mongoose.Schema({
    armorPerLevel: Number,
    attackDamage: Number,
    mpPerLevel: Number,
    attackSpeedOffset: Number,
    mp: Number,
    armor: Number,
    hp: Number,
    hpRegenPerLevel: Number,
    attackSpeedPerLevel: Number,
    attackRange: Number,
    moveSpeed: Number,
    attackDamagePerLevel: Number,
    mpRegenPerLevel: Number,
    critPerLevel: Number,
    spellBlockPerLevel: Number,
    crit: Number,
    mpRegen: Number,
    spellBlock: Number,
    hpRegen: Number,
    hpPerLevel: Number
});

mongoose.model('ChampionStats', ChampionStatsSchema);
