class Team{
    constructor(team){
    this.id = team.id
    this.name = team.name
    this.players = team.players
   
    }

// ------------ Render Team ----------
    renderTeam(){
        const playerList = document.createElement('ul')
        playerList.id = `team-${this.id}`
        const li = document.createElement('li')
        li.dataset.id = `${this.id}`
        
        const t = document.createElement('t')
        t.innerText = `${this.name}`
    
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = " delete"
        deleteBtn.addEventListener("click", Team.deleteTeam)
        
    
        const playerForm = document.createElement('form')
        
        
        playerForm.innerHTML += `<input type="text" id="player-input-${this.id}">
        <input type="submit">`
        li.append(t, deleteBtn, playerForm, playerList)
        teamList.appendChild(li)

        this.players.forEach(player => {
            const playerLi = document.createElement('li')
           
            const newPlayer = new Player(player)
            newPlayer.renderPlayer()

        })

        playerForm.addEventListener("submit", event =>{
            event.preventDefault()
          
            const name = document.querySelector(`#player-input-${this.id}`)
            
             Player.create(name.value, this)
            name.value = ""
        })
        

        teamForm.reset()
    
        teamForm.addEventListener("submit", Team.submitTeam)
    }

// -------- Submitting Team -----------
    static submitTeam(){
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
        .then(data => { 
            const newTeam = new Team(data)
            newTeam.renderTeam()
        }
            )
        .catch(error => console.log("Error this was not fulfilled"))
    }


// ---------- Delete Team ----------
    static deleteTeam(e){
        const teamId = e.target.parentElement.dataset.id
        fetch(`${BASE_URL}/teams/${teamId}`, {
            method: "DELETE"
        })
        
        e.target.parentElement.remove()
        
    }

// ------Fetching Teams ------
    static fetchTeams(){
        fetch(`${BASE_URL}/teams`) 
        .then(res => res.json())
        .then(teams =>  teams.forEach(data => {
            const newTeam = new Team(data)
            newTeam.renderTeam()
        }))
        .catch(error =>console.log("Error this was not fulfilled"))
        
    }

}
