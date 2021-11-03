function gameObject(){
  const game = {      
        home: {
            "teamName": "Brooklyn Nets" ,
            "colors": ["Black","White"] ,
            "players": {
                "Alan Anderson" : {
                    number: 0 ,
                    shoe: 16 ,
                    points: 22 ,
                    rebounds: 12 ,
                    assists: 12 ,
                    steals: 3 ,
                    blocks: 1 ,
                    slamDunks: 1
                },
                "Reggie Evans" : {
                    number: 30 ,
                    shoe: 14 ,
                    points: 12 ,
                    rebounds: 12 ,
                    assists: 12 ,
                    steals: 12 ,
                    blocks: 12 ,
                    slamDunks: 7
                },
                "Brook Lopez" : {
                    number: 11 ,
                    shoe: 17 ,
                    points: 17 ,
                    rebounds: 19 ,
                    assists: 10 ,
                    steals: 3 ,
                    blocks: 1 ,
                    slamDunks: 15
                },
                "Mason Plumlee" : {
                    number: 1 ,
                    shoe: 19 ,
                    points: 26 ,
                    rebounds: 12 ,
                    assists: 6 ,
                    steals: 3 ,
                    blocks: 8 ,
                    slamDunks: 5
                },
                "Jason Terry" : {
                    number: 31 ,
                    shoe: 15 ,
                    points: 19 ,
                    rebounds: 2 ,
                    assists: 2 ,
                    steals: 4 ,
                    blocks: 11 ,
                    slamDunks: 1
                }
            }
        },
        away : {
            "teamName": "Charlotte Hornets" ,
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien" : {
                    number: 4 ,
                    shoe: 18 ,
                    points: 10 ,
                    rebounds: 1 ,
                    assists: 1 ,
                    steals: 2 ,
                    blocks: 7 ,
                    slamDunks: 2
                },
                "Bismak Biyombo" : {
                    number: 0 ,
                    shoe: 16 ,
                    points: 12 ,
                    rebounds: 4 ,
                    assists: 7 ,
                    steals: 7 ,
                    blocks: 15 ,
                    slamDunks: 10
                },
                "DeSagna Diop" : {
                    number: 2 ,
                    shoe: 14 ,
                    points: 24 ,
                    rebounds: 12 ,
                    assists: 12 ,
                    steals: 4 ,
                    blocks: 5 ,
                    slamDunks: 5
                },
                "Ben Gordon" : {
                    number: 8 ,
                    shoe: 15 ,
                    points: 33 ,
                    rebounds: 3 ,
                    assists: 2 ,
                    steals: 1 ,
                    blocks: 1 ,
                    slamDunks: 0
                },
                "Brendan Haywood" : {
                    number: 33 ,
                    shoe: 15 ,
                    points: 6 ,
                    rebounds: 12 ,
                    assists: 12 ,
                    steals: 22 ,
                    blocks: 5 ,
                    slamDunks: 12
                }
            }
        },
    }
    return game
}

//console.log(gameObject());

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
  }
  
 // console.log(homeTeamName())
  // logs "Brooklyn Nets"

function numPointsScored(playername){
    let object= gameObject()
    
    for (let key in object){
      let players = object[key]['players']
      for (let player in players)
      {
         if (player === playername){
             return console.log(players[player]["points"])
         }
      }       
    }   
}
numPointsScored("Brendan Haywood")

function showSize(playername){
    let object= gameObject()
    
    for (let key in object){
      let players = object[key]['players']
      for (let player in players)
      {
         if (player === playername){
             return console.log(players[player]["shoe"])
         }
      }       
    }   
}
showSize("Brendan Haywood")

function teamColor(teamname){
    let object= gameObject()

    for(let key in object){
        let team = object[key]['teamName']
        if (team === teamname){
            console.log(object[key]['colors'])
        }
    }
}
teamColor("Brooklyn Nets")

function teamName(){
    let object = gameObject()
    let team =[];
    for(let key in object){   
    team.push(object[key]['teamName'])
    }
    console.log(team)    
}

teamName(gameObject())

function playerNumbers(teamname){
    let object = gameObject()
    let teamnumbers = [];
    for (let key in object){
        let team = object[key]['teamName']
        if (team === teamname){
           let players = object[key]['players']
           for (const player in players){
                teamnumbers.push(players[player]['number']);
           }
        }      
      }
    return console.log(teamnumbers)
;}
playerNumbers("Brooklyn Nets")

function playerStats(playername){
    let object = gameObject()
    
    for (let key in object){
       let players = object[key]['players']
       if (players[playername]){
        console.log(`Player: ${playername}`)
        console.log(players[playername])
       }  
      } 
}

playerStats("Brendan Haywood")

function bigShoeRebounds(){
    let biggestShoe = {shoe:0};
    let object = gameObject();
    for (let key in object) {
        let players = object[key]['players'];
        for(let player in players) {
            let person = players[player]
            if(person.shoe > biggestShoe.shoe) {
                biggestShoe = person;
            }
        }
    }
    return console.log(biggestShoe.rebounds);
}

bigShoeRebounds()
