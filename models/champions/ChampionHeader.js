const mongoose = require('mongoose');


const ChampionHeaderSchema = new mongoose.Schema({
  championData: {type: mongoose.Schema.Types.ObjectId, ref: 'Champion'},
  version: String,
  keys: {}

});

mongoose.model('ChampionHeader', ChampionHeaderSchema);
