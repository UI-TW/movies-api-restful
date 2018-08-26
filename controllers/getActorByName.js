const actors = require("../data/actors.json");

const getActorByName = (name) => {
  return actors.filter(actor => actor.name.toLowerCase() === name.toLowerCase());
};

module.exports = getActorByName;
