const mongoose = require('mongoose');


const ChampionSchema = new mongoose.Schema({
  allyTips: [String],
  blurb: String,
  enemyTips: [String],
  id: Number,
  image: {},
  info: {},
  key: String,
  lore: String,
  parType: String,
  passive: {},
  recommended:String,
  skins: String,
  stats: {type: mongoose.Schema.Types.ObjectId, ref: 'ChampionStats'},
  tags: [String],
  title: String
});


mongoose.model('Champion', ChampionSchema)
