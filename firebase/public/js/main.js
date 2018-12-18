//[...document.querySelectorAll(".filter")].forEach(el => el.addEventListener("click", filter));
//showPage();


//function show(shown,hidden) {
//    document.getElementById(shown).style.display='block';
//     document.getElementById(hidden).style.display='none';

//   }


//  console.log("ok");
//   var page2 = document.getElementByclass("teams-location").addEventListener('click',onclick);
//   var page3 = document.getElementByclass("schedule").addEventListener('click',onclick);
//   var page4 = document.getElementByclass("TournamentRules").addEventListener('click',onclick);
//   var page5 = document.getElementByclass("chat").addEventListener('click', onclick);
//   var page6 = document.getElementByclass("player-results").addEventListener('click', onclick);
//  var page7 = document.getElementByclass("match-results").addEventListener('click', onclick);
//   var page8 = document.getElementByclass("rank").addEventListener('click', onclick);
//   var page9 = document.getElementByclass("clubs").addEventListener('click', onclick);

//var filteredclubs = [];

//teamsToRemove.map(function(team) { 
//            filteredclubs.splice(filteredclubs.indexOf(team), 1)


//////////////////
//           const team = teams.find(team => team.club == this.name);            
//          const  games = team.players.filter(player=>player.name===searchPlayerName)



data.tournament_results.teams.sort((c1, c2) => c1.club.localeCompare(c2.club));




var app = new Vue({
    el: "#app",
    data: {
        pages: "index",
        name: "",
        teams: data.tournament_results.teams,
        Games: data.tournament_results.Games,
        players: [],
        category: "",
        round: "",



    },
    methods: {
        logout: function () {
            firebase.auth().signOut().then(function () {

                console.log("logout");

                document.getElementById("login").classList.remove("d-none");
                document.getElementById("create-post").classList.add("d-none");
                document.getElementById("logout").classList.add("d-none");
            }).catch(function (e) {
                console.error()
            });
        },
        showPages: function (id, teamName) {
            this.pages = id;
            this.name = teamName;


        },

        populatePlayers: function () {
            for (var i = 0; i < this.teams.length; i++) {
                for (var j = 0; j < this.teams[i].players.length; j++) {
                    this.players.push(this.teams[i].players[j]);
                }
            }

        },
        changeCategory(cat) {
            this.category = cat;
        },
        changeRound(rnd) {
            this.round = rnd;
        }

    },

    created: function () {
        this.populatePlayers();
    },

    computed: {
        teamselected: function () {
            return this.teams.find(team => team.club == this.name);

        },

        SelectPlayer: function () {
            return this.players.find(player => player.GamesPlayed == this.name);

        },


        Matchselected: function () {
            return this.Games.find(game => game.ResultGame == this.name);
        },


        sortedPlayersByPoints: function () {
            return this.players.sort((a, b) => (b.total_points - a.total_points));
        }
    }
});
