document.addEventListener("DOMContentLoaded", () => {
    fetchTeams()
    createForm()
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
        <form >
            <label for="tname">Team Name:</label>
            <input type="text" name="tname" id="tname" ><br>
            <button type="submit">Create</button>
        </form>
    
    `
}