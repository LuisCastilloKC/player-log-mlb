class Player{
    constructor(player){
        this.id = player.id
        this.name = player.name;
        this.team = player.team;
        this.renderPlayer()
    }

    renderPlayer(){
        
        const li = document.createElement('li')
        li.dataset.id = this.id
        li.innerText = this.name
        //console.log(this)
        const ul = document.querySelector(`#${this.team.name}-${this.team.id}`)
        ul.appendChild(li)
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
         .then(json => new Player(json))
     }
}


