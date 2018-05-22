const superagentPromise = require('superagent-promise');

const _superagent = require('superagent');


const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT_SINGLE_CHAMPIONS = 'https://na1.api.riotgames.com/lol/static-data/v3/champions/'
const API_ROOT_ALL_CHAMPIONS = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&champListData=all&tags=all&dataById=false&api_key='
const responseBody = res => res.body;

const handleErrors = err => {
  if (err /*&& err.response && err.response.status === 401*/) {
    console.log(err);
  }
  return err;
};


const Champions = {
  getSingleChampion: id => superagent.get(`${API_ROOT_SINGLE_CHAMPIONS}${id}?locale=en_US&champData=all&tags=all&api_key=${process.env.REACT_APP_LOL_API_KEY}`).end(handleErrors).then(responseBody),
  getAllChampions: () => superagent.get(`${API_ROOT_ALL_CHAMPIONS}${process.env.REACT_APP_LOL_API_KEY}`).end(handleErrors).then(responseBody)
}

const Player = {

}

module.exports.Champions = Champions;
module.exports.Player = Player;
