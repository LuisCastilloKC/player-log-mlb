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
    

const PLAYER_API = "http://127.0.0.1:3000"

const fetchPlayer = () =>{
    fetch(`${PLAYER_API}/players`)
        .then(resp => resp.json())
        .then(playersData => {
            
            for (const player of playersData){
                let playerVar = new Player(
                    player.id,
                    player.name, 
                    player.age, 
                    player.gender, 
                    player.team_name, 
                    player.hight, 
                    player.birth_country, 
                    player.position, 
                    player.jersey_number,
                    player.team_id);
                    playerVar.renderPlayer();
              
            }
    })

}

const playerForm = () =>{
    let createPlayerDiv = document.getElementById("create_player_div")
        createPlayerDiv.innerHTML +=
    `
        <form>
            <label for="p_name">Player Name:</label>
            <input type="text" name="p_name" id="p_name" ><br>
            <label for="p_age">Age:</label>
            <input type="text" name="p_age" id="p_age" ><br>
            <button type="submit">Add Player</button>
        </form>
    `
    createPlayerDiv.addEventListener("submit", playerSubmit)
}

const playerSubmit = () =>{
    event.preventDefault();
    let p_name = document.getElementById("p_name").value 
    let p_age = document.getElementById("p_age").value 
    
    let player = {
        name: name,
        age: age,
    }
    fetch(`${PLAYER_API}/players`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body:JSON.stringify(player)
    })
    .then(resp => resp.json())
    .then(player => {
        let pl = new Player(player.id, player.name, player.age)
        pl.renderPlayer()
        
    })

}

const addPlayer = () => {
    tId = parseInt(event.target.dataset.id)
    document.getElementById(`team${teamId}`)

}



// const deleteTeam = () =>{
//     let teamId = parseInt(event.target.dataset.id)
//     debugger;
//     document.getElementById(`team${teamId}`).remove()
//     fetch(`${BASE_URL}/teams/${teamId}`,{
//         method: 'DELETE'
//     })
    