const team = {
    _players : [
        {
            firstName: "Ali",
            lastName: "Dindar",
            age: 34,
        }, 
        {
            firstName: "Ehssan",
            lastName: "Dindar",
            age: 27,

        },
        {   
            firstName: "Samir",
            lastName: "Azrour",
            age: 33,
        }

    ],
    _games: [
        {
            opponent: "USA",
            teamPoints: 25,
            opponentPoints: 2,
        },
        {
            opponent: "France",
            teamPoints: 20,
            opponentPoints: 15,
        },
        {
            opponent: "Germany",
            teamPoints: 18,
            opponentPoints: 17,
        }
    ],

    get players(){
        return this._players;
    },

    get games(){
        return this._games;
    },

    addPlayer(newFirstName, newLastName, newAge){
        const player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge   
        };
        this._players.push(player);
    },

    addGame(opponent, teamPoints, opponentPoints){
        const game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this._games.push(game);
    }
};


// TEST
team.addPlayer("Jean", "Moule", 33);
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("UAE", 55, 45);
team.addGame("Titans", 100, 98);
console.log(team.players);
console.log(team.games);