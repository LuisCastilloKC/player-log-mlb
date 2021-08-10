class Player{
    constructor(player){
        this.id = player.id
        this.name = player.name;
        this.team_id = player.team_id;
        //this.renderPlayer()
    }

    renderPlayer(){
        
        const li = document.createElement('li')
        li.dataset.id = this.id
        li.innerText = this.name
        //console.log(this)
        

        //----------------------------------------------------------
        const deleteBtnPlayer = document.createElement("button")
        deleteBtnPlayer.innerText = "Remove"
        li.appendChild(deleteBtnPlayer)


        
        deleteBtnPlayer.addEventListener("click", deletePlayer)
        
        //---------------------------------------------------------
        
        
        
        
        const ul = document.querySelector(`#team-${this.team_id}`)
        ul.append(li)

    }
    
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
     }

    
}

