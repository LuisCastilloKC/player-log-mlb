class Player{
    constructor(player){
        this.id = player.id
        this.name = player.name;
        this.team_id = player.team_id;
        
    }

// ------ Render Player -----
    renderPlayer(){
        
        const li = document.createElement('li')
        li.dataset.id = this.id
        li.innerText = this.name

        const deleteBtnPlayer = document.createElement("button")
        deleteBtnPlayer.innerText = "Remove"

        
        li.append(deleteBtnPlayer)


        deleteBtnPlayer.addEventListener("click", Player.deletePlayer)
        
        const ul = document.querySelector(`#team-${this.team_id}`)
        ul.append(li)

    }

// ---------- Create Player ------------
     static create(player, team){
        fetch(`${BASE_URL}/players`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accent": "application/json"
            },
            body: JSON.stringify({
                name: player,
                team_id: team.id
            })         
        })
        .then(resp => resp.json())
         .then(json => {
            const newPlayer = new Player(json)
            newPlayer.renderPlayer()
        }
             )
             .catch(error => console.log("Error this was not fulfilled"))
     }

// ------- Delete Player ---------
     static deletePlayer(e){
        const playerId = e.target.parentElement.dataset.id
        fetch(`${BASE_URL}/players/${playerId}`, {
            method: "DELETE"
        })
        e.target.parentElement.remove()
    }
    
    
}

