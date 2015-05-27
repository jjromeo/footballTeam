var chai = require('chai'),
expect = chai.expect;
var sinon = require('sinon');
var Team = require('../src/team');

describe('Team', function(){
  var players;

  before(function() {
    players =  {
      total: function() { return 7; },
      totalLadies: function() { return 5 },
      totalMen: function() { return 2 }
    };
  });
  
  it ('can have players', function(){
    var team = new Team(players);
    expect(team.size()).to.eq(5)
    expect(team.isValid()).to.eq(true)
  });

  it ('cannot have more than 10 players', function(){
    sinon.stub(players, "total", function() {
      return 11;
    });
    var team = new Team(players)
    expect(team.isValid()).to.eq(false);
  })

  xit ('cannot have less than 5 players', function(){
    var players = { length: 4};
    var team = new Team(players)
    expect(team.isValid()).to.eq(false);
  })

  xit ('must have at least two ladies or two men in the team', function() {
    var players = { length: 5,
      totalLadies: function() { return 2 },
      totalMen: function() { return 2 }
    };

    var team = new Team(players);
    //expect(team.isValid()).to.eq(true);
  })
});
