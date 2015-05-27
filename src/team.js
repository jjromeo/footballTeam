var DEFAULTS = {
  min: 5,
  max: 10,
  min_per_gender: 2
};

// Could this be done without using prototype?
var Team = function(players){
  this.players = players;
};

Team.prototype.size = function() {
  return this.players.total();
}

Team.prototype.isValid = function() {
  // return a validation object here, rather than a booleanj
  return this.isValidSize() && this.isValidMix();
}

Team.prototype.isValidSize = function() {
  return DEFAULTS.min <= this.total() && this.total() <= DEFAULTS.max;
};

Team.prototype.isValidMix = function() {
  this.hasEnoughMen() && this.hasEnoughLadies();
};

Team.prototype.hasEnoughMen = function() {
  return this.players.totalMen() > DEFAULTS.min_per_gender;
}

Team.prototype.hasEnoughLadies = function() {
  return this.players.totalLadies() > DEFAULTS.min_per_gender;
}

module.exports = Team;
