const teamForm = document.getElementById("team-form")
const teamInput = document.getElementById("team-input")
const teamList = document.getElementById("team-list")
const BASE_URL = "http://127.0.0.1:3000"

function fetchTeams(){
    fetch(`${BASE_URL}/teams`)
    .then(res => res.json())
    .then(teams => teams.forEach(data => new Team(data)))
    
}

teamForm.addEventListener("submit", submitTeam)


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
    .then(data => new Team(data))
    
}



function deleteTeam(e){
    const teamId = e.target.parentElement.dataset.id
    fetch(`${BASE_URL}/teams/${teamId}`, {
        method: "DELETE"
    })
    e.target.parentElement.remove()
    
}


fetchTeams()

