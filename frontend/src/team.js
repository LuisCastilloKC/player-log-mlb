class Team{

    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    renderTeam() {
        let teamDiv = document.getElementById("team-div")
        
        teamDiv.innerHTML +=
        `
        <div id=team${this.id}>
            <h2>MLB Team Name</h2>
            <li> <b> Team Name:</b> ${this.name} </li>
        <form id="addPlayerForm">
            <label for="p-name">Player Name:</label>
            <input type="text" name="p-name" id="p-name" ><br>
            <label for="pge">Age:</label>
            <input type="text" name="p-age" id="p-age" ><br>
            <button id="addPlayer-${this.id}" onclick="addPlayer() "type="submit">Add Player</button>
            <button id="bt" data-id=${this.id} onclick="deleteTeam()">Delete</button>
        </form>
        </div>
        `
    }
}

