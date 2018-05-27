const mongoose = require('mongoose');

const ChampionSpellsSchema = mongoose.Schema({
  cooldown: [Number],
  cooldownBurn: String,
  cost: [Number],
  costBurn: String,
  costType: String,
  description: String,
  effect: [],
  effectBurn: [String],
  //image
  key: String,
  //leveltip,
  maxRank: Number,
  name: String,
  range: [Number],
  rangeBurn: String,
  resource: String,
  sanitizedDescription: String,
  sanitizedTooltip: String,
  tooltip: String,
  vars: [{}]

});

mongoose.model('ChampionSpells', ChampionSpellsSchema);
