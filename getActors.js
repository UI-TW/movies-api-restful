const rp = require('request-promise');
const fs = require('fs');

const movies = require('./data/movies');

const PATH = './data/actors.json';
const actors = movies.reduce((acc, film) => acc.concat(film.Actors.split(',')), []); //length 164
const parseActors = actors.map(actor => actor.trim());
const uniqueActors = [...new Set(parseActors)];  //length 156

const API_KEY = '';
//const uniqueActors = ['Robin Williams'];

const getData = (actor) => {
  console.log(`Getting info for actor - ${actor}`);
  return rp
    .get({
      uri: 'http://api.myapifilms.com/imdb/idIMDB',
      qs: {
        name: actor,
        token: API_KEY,
        format: 'json',
        language: 'en-us',
        filmography: 1,
        limit: 1,
        bornDied: 1,
        starSign: 1,
        starMeter: 1,
        fullSize: 1,
        exactFilter: 0,
        uniqueName: 0,
        actorActress: 0,
        actorTrivia: 0,
        actorPhotos: 0,
        actorVideos: 0,
        salary: 0,
        spouses: 0,
        tradeMark: 0,
        personalQuotes: 0,
        alternateNames: 0
      }
    });
};

async function getActorsInfo(actors) {
  const actorsInfo = [];
  for (const index in actors) {
    if (actors.hasOwnProperty(index)) {
      const actor = actors[index];
      try {
        const response = await getData(actor);
        const info = JSON.parse(response).data.names[0];
        info.name = actor;
        actorsInfo.push(info);
      }
      catch (e) {
        console.log(`Error while getting info for actor - ${actor}`);
        throw Error(e);
      }
    }
  }
  return actorsInfo;
}

getActorsInfo(uniqueActors).then((actorsInfo) => {
  const size = actorsInfo.length;
  console.log(`${size} actors info successfully received`);
  fs.writeFileSync(PATH, JSON.stringify(actorsInfo), 'utf8');
  console.log(`${size} actors info successfully saved in ${PATH}`);
}).catch((e) => {
  console.log(`Error while getting actors info - ${e}`);
});
