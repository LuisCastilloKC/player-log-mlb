const teamForm = document.getElementById("team-form")
const teamInput = document.getElementById("team-input")
const teamList = document.getElementById("team-list")
const BASE_URL = "http://127.0.0.1:3000"

teamForm.addEventListener("submit", Team.submitTeam)

Team.fetchTeams()

const sortTeamBtn = document.getElementById('sortTeamBtn')

function sortTeam(){

sortTeamBtn.addEventListener('click', (event)=>{

    const teamUl = document.getElementById('team-list')
    teamUl.innerHTML = ""

    const sortedTeam = Team.all.sort((a,b)=>{
        const teamA = a.name.toLowerCase()
        const teamB = b.name.toLowerCase()

        if (teamA < teamB){
            return -1
        } if (teamA > teamB){
            return 1
        } else{
            return 0
        }

    })
    sortedTeam.forEach(team =>{
        team.renderTeam()
    })
})

}

sortTeam()