const team = {
  //the _players and _games are known as properties, and within them we 
  // have initialized the properties which are arrays with objects {}
  _players: [
    {firstName: "Bruno", lastName: "Fernandez", age: 30},
    {firstName: "Marcus", lastName: "Rashford", age: 27},
    {firstName: "Harry", lastName: "Maguire", age: 29}
  ],
  _games: [
    {opponent: "Manchester City", teamPoints: 1, opponentPoints: 1},
    {opponent: "Everton", teamPoints: 3, opponentPoints: 0},
    {opponent: "Southhampton", teamPoints: 3, opponentPoints: 0}
  ],
//this gets players property 
  get players () {
    return this._players ;
  },

  get games () {
    return this._games ;
  },
// this allows us to add new players to our array
 addPlayer(newFirstName, newLastName, newAge){
  if (typeof newFirstName === 'string' && typeof newLastName === 'string' && typeof newAge === 'number') {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
  }
}, 

  addGame (newOpponent, newTeamPoints, newOpponentPoints) {
    if (typeof newFirstName === 'string' && typeof newLastName === 'string' && typeof newAge === 'number'){
        let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    }
    this._games.push(game);
  }
    }
};

team.addPlayer("Paul", "Pogba", 33);
team.addGame("Lyon", 3, 0);
console.log(team.players);
console.log(team.games);