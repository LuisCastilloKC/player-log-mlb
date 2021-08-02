const teamForm = document.getElementById("team-form")
const teamInput = document.getElementById("team-input")
const teamList = document.getElementById("team-list")
const BASE_URL = "http://127.0.0.1:3000"


function fetchTeams(){
    fetch(`${BASE_URL}/teams`)
    .then(res => res.json())
    .then(teams => teams.forEach(data => renderTeam(data.data)))
}

teamForm.addEventListener("submit", submitTeam)

/// function to submit Create Team
function submitTeam(){
    event.preventDefault()
    const configObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: teamInput.value
        })
    }
    fetch(`${BASE_URL}/teams`, configObj)
    .then(res => res.json())
    .then(data => renderTeam(data.data))
    
}

//  ---------- Render Team to the Frontend --------
function renderTeam(team){
    const tm = {id: team.id, name: team.attributes.name, players: team.attributes.players} // sending id team  of team the team name and players
    const newTeam = new Team(tm)
    //console.log(team)
    const li = document.createElement('li')
    li.dataset.id = newTeam.id

    const t = document.createElement('t')
    t.innerText = newTeam.name

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = " delete"
    deleteBtn.addEventListener("click", deleteTeam)
    // li.appendChild(t)

    const playerForm = document.createElement('form')
    playerForm.innerHTML += `<input type="text" id="player-input">
                            <input type="submit">`
    playerForm.addEventListener("submit", renderPlayer)

    const playerList = document.createElement('ul')
    newTeam.players.forEach(player => {
        const playerLi = document.createElement('li')
        playerLi.innerText = player.name
        playerList.appendChild(playerLi)
    })

    li.append(t, deleteBtn, playerForm, playerList)

    teamList.appendChild(li)

    teamForm.reset()

}

function deleteTeam(e){
    const teamId = e.target.parentElement.dataset.id
    fetch(`${BASE_URL}/teams/${teamId}`, {
        method: "DELETE"
    })

    e.target.parentElement.remove()
}


function renderPlayer(e){
    e.preventDefault()
    const p = {name: e.target.children[0].value, teamId: e.target.parentElement.dataset.id}
    const newPlayer = new Player(p)
    
    
    const playerList = e.target.nextElementSibling
    
   
    const li = document.createElement('li')
    li.dataset.id = newPlayer.teamId
    li.innerText = newPlayer.name
    playerList.appendChild(li)
    
    submitPlayer(newPlayer.name, newPlayer.teamId)

    e.target.reset()
    
}

 function submitPlayer(player, teamId){
    fetch(`${BASE_URL}/players`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accent": "application/json"
        },
        body: JSON.stringify({
            name: player,
            team_id: teamId
        })         
    })
 }

fetchTeams()
