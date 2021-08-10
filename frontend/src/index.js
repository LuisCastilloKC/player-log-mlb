const teamForm = document.getElementById("team-form")
const teamInput = document.getElementById("team-input")
const teamList = document.getElementById("team-list")
const BASE_URL = "http://127.0.0.1:3000"

function fetchTeams(){
    fetch(`${BASE_URL}/teams`) // promise  => is waiting for information to be sent back
    .then(res => res.json())
    .then(teams => teams.forEach(data => new Team(data)))

}

teamForm.addEventListener("submit", Team.submitTeam)



function deleteTeam(e){
    const teamId = e.target.parentElement.dataset.id
    fetch(`${BASE_URL}/teams/${teamId}`, {
        method: "DELETE"
    })
    
    e.target.parentElement.remove()
    
}

//----------------------------
function deletePlayer(e){
    const playerId = e.target.parentElement.dataset.id
    fetch(`${BASE_URL}/players/${playerId}`, {
        method: "DELETE"
    })
    e.target.parentElement.remove()
}
//----------------------------


fetchTeams()

