class Team{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    renderTeam() {
        let teamDiv = document.getElementById("team-div")

        teamDiv.innerHTML +=
        `
        <ul>
            <h2>MLB Team Name</h2>
            <li> <b> Team Name:</b> ${this.name} </li>
        </ul>
        <button class="delete-bttn" data-id= ${this.id}>Delete Team</button>
        `
    }
}