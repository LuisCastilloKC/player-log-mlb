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
            <form>
            <label for="pname">Player Name:</label>
            <input type="text" name="pname" id="pname" ><br>
            <button id="addPlayer-${this.id}" onclick="addPlayer() "type="submit">Add Player</button>
        </form>
            <button id="bt" data-id=${this.id} onclick="deleteTeam()">Delete</button>
        </div>
        `
    }
}

