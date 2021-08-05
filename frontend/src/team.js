class Team{
    constructor(team){
    this.id = team.id
    this.name = team.name
    this.players = team.players
    this.renderTeam()
    }

    renderTeam(){
        const playerList = document.createElement('ul')
        playerList.id = `${this.name}-${this.id}`
        const li = document.createElement('li')
        li.dataset.id = `${this.id}`
    
        const t = document.createElement('t')
        t.innerText = `${this.name}`
    
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = " delete"
        deleteBtn.addEventListener("click", deleteTeam)
        
    
        const playerForm = document.createElement('form')

        this.players.forEach(player => {
            const playerLi = document.createElement('li')
            playerLi.innerText = player.name
            playerList.appendChild(playerLi)
        })

        playerForm.innerHTML += `<input type="text" id="player-input-${this.id}">
        <input type="submit">`
        li.append(t, deleteBtn, playerForm, playerList)
        teamList.appendChild(li)
        playerForm.addEventListener("submit", event =>{
            event.preventDefault()
            const name = document.querySelector(`#player-input-${this.id}`)
            
             Player.create(name.value, this)
            name.value = ""
        })
        
    
        teamForm.reset()
    
    }

}

