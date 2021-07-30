document.addEventListener("DOMContentLoaded", () => {
    fetchTeams()
    createForm()
     fetchPlayer()
    playerForm()
});

const BASE_URL = "http://127.0.0.1:3000"


//READ - showing to the teams index
const fetchTeams = () =>{
    fetch(`${BASE_URL}/teams`) // fetching all the data from teams route
    .then(resp => resp.json())
    .then(teams => {
    
        for (const team of teams){
            let tm = new Team(team.id, team.name)
            tm.renderTeam();
        }
        
    })
}


//CREAT 
const createForm = () => {
    let teamCreate = document.getElementById("create-div")
    teamCreate.innerHTML +=
    `
    <h2>Create Team Name</h2>
    <form>
    <label for="name">Team Name:</label>
    <input type="text" name="name" id="name" ><br>
    <button type="submit">Create</button>
    </form>
    `
    
    teamCreate.addEventListener("submit", teamCreateSubmit)
}

const teamCreateSubmit = () => {
    event.preventDefault();
    let name = document.getElementById("name").value
    
    let team = {
        name: name,
    }
    clearFields()
    fetch(`${BASE_URL}/teams`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json' 
        },
        body: JSON.stringify(team)
    })
    .then(resp => resp.json())
    .then(team => {
        let tm = new Team(team.id, team.name)
        tm.renderTeam();
    })
}

// This function work but it clear the value -- will come back later
const clearFields = () =>{
    document.getElementById("name").value=""
    
}

// DELETE
const deleteTeam = () =>{
    let teamId = parseInt(event.target.dataset.id)
    document.getElementById(`team${teamId}`).remove()
    fetch(`${BASE_URL}/teams/${teamId}`,{
        method: 'DELETE'
    })
    
    
}


// const PLAYER_API = "http://127.0.0.1:3000"

// const fetchPlayer = () =>{
//     fetch(`${PLAYER_API}/players`)
//     .then(resp => resp.json())
//     .then(playersData => {
        
//         for (const player of playersData){
//             let playerVar = new Player(
//                 player.id,
//                 player.name, 
//                 player.age, 
//                 player.gender, 
//                 player.team_name, 
//                 player.hight, 
//                 player.birth_country, 
//                 player.position, 
//                 player.jersey_number,
//                 player.team_id);
//                 playerVar.renderPlayer();
                
//             }
//         })
        
//     }
    
//     const playerForm = () =>{
//         // let createPlayerDiv.document.createElement("div")
//         // createPlayerDiv.id = 'create_player_div'
//         // createPlayerDiv.className = 'addPlayer'

//         // let createPlayerDiv = document.getElementById("create_player_div")
//         let createPlayerDiv = document.querySelector(".playerC")
//         createPlayerDiv.innerHTML +=
//         `
//         <form>
//         <label for="name">Player Name:</label>
//         <input type="text" name="name" id="p_name" ><br>
        
//         <label for="age">Age:</label>
//         <input type="number" name="age" id="age" ><br>
        
//         <label for="gender">Gender:</label>
//         <input type="text" name="gender" id="gender" ><br>
        
//         <label for="team_name">Team Name:</label>
//         <input type="text" name="team_name" id="team_name"><br>
        
//         <label for="hight">Hight:</label>
//         <input type="number" name="hight" id="hight" ><br>
        
//         <label for="birth_country">Birth Country:</label>
//         <input type="text" name="birth_country" id="birth_country" ><br>
        
//         <label for="position">Position:</label>
//         <input type="text" name="position" id="position" ><br>
        
//         <label for="jersey_number">Jersey Number:</label>
//         <input type="number" name="jersey_number" id="jersey_number" ><br>
        
//         <button type="submit">Add Player</button>
//         </form>
//         `
//         createPlayerDiv.addEventListener("submit", playerSubmit)
//     }
    
//     const playerSubmit = () =>{
//         event.preventDefault();
//         let name = document.getElementById("p_name").value 
//         let age = document.getElementById("age").value 
//         let gender = document.getElementById("gender").value 
//         let team_name = document.getElementById("team_name").value
//         let hight = document.getElementById("hight").value
//         let birth_country = document.getElementById("birth_country").value 
//         let position = document.getElementById("position").value 
//         let jersey_number = document.getElementById("jersey_number").value 
        

//         let player = {
//             name: name,
//             age: age,
//             gender: gender,
//             team_name: team_name,
//             hight: hight,
//             birth_country: birth_country,
//             position: position,
//             jersey_number: jersey_number,
            
//         }
        
        
   
//     fetch(`${PLAYER_API}/players`, {
//         method: "POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-type': 'application/json'
//         },
//         body:JSON.stringify(player)
//     })
//     .then(resp => resp.json())
//     .then(player => {
//         let pl = new Player(player.id, player.name, player.age, player.gender, player.team_name, player.hight, player.birth_country, player.position, player.jersey_number)
//         pl.renderPlayer()
        
//     })

// }

// const addPlayer = () => {
//     tId = parseInt(event.target.dataset.id)
//     document.getElementById(`team${teamId}`)

// }



// const deleteTeam = () =>{
//     let teamId = parseInt(event.target.dataset.id)
//     debugger;
//     document.getElementById(`team${teamId}`).remove()
//     fetch(`${BASE_URL}/teams/${teamId}`,{
//         method: 'DELETE'
//     })
    