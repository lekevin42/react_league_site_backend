const superagentPromise = require('superagent-promise');

const _superagent = require('superagent');


const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT_SINGLE_CHAMPIONS = 'https://na1.api.riotgames.com/lol/static-data/v3/champions/'  //26?locale=en_US&champData=all&tags=all&api_key=RGAPI-b66a4d5a-88ee-4eed-82b2-3ff0b0d8e2d1'
const responseBody = res => res.body;

const handleErrors = err => {
  if (err /*&& err.response && err.response.status === 401*/) {
    console.log(err);
  }
  return err;
};



// https://na1.api.riotgames.com/lol/static-data/v3/champions/36?locale=en_US&champData=all&tags=all&api_key=RGAPI-b66a4d5a-88ee-4eed-82b2-3ff0b0d8e2d1

const Champions = {
  getSingleChampion: id => superagent.get(`${API_ROOT_SINGLE_CHAMPIONS}${id}?locale=en_US&champData=all&tags=all&api_key=${process.env.REACT_APP_LOL_API_KEY}`).end(handleErrors).then(responseBody)
}

const Player = {

}

module.exports.Champions = Champions;
module.exports.Player = Player;
