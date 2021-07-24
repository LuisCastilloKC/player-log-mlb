document.addEventListener("DOMContentLoaded", () => {
    fetchTeams()
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