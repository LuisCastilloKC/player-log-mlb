class Player{
    constructor(id, name, age, gender, team_name, hight, birth_country, position, jersey_number, team_id){
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.team_name = team_name;
        this.hight = hight;
        this.birth_country = birth_country;
        this.position = position;
        this.jersey_number = jersey_number;
        this.team_id = team_id;
       
    }

    renderPlayer(){
        let playerDiv = document.createElement('div')
        playerDiv.className = 'player'
        playerDiv.id = `player-${this.id}`
         
        let name = document.createElement('li')
        name.className = 'name'
        name.textContent = `Name: ${this.name}`
        
        let age = document.createElement('li')
        age.className = 'age'
        age.textContent = `Age: ${this.age}`

        let gender = document.createElement('li')
        gender.className = 'gender'
        gender.textContent = `Gender: ${this.gender}`

        let team_name = document.createElement('li')
        team_name.className = 'team_name'
        team_name.textContent = `Team Name: ${this.team_name}`
        
        let hight = document.createElement('li')
        hight.className = 'hight'
        hight.textContent = `Hight: ${this.hight}`

        let birth_country = document.createElement('li')
        birth_country.className = 'birth_country'
        birth_country.textContent = `Birth Country: ${this.birth_country}`
        
        let position = document.createElement('li')
        position.className = 'position'
        position.textContent = `Position: ${this.position}`

        let jersey_number = document.createElement('li')
        jersey_number.className = 'jersey_number'
        jersey_number.textContent = `Jersey Number: ${this.jersey_number}`

        let team_id = document.createElement('li')
        team_id.className = 'team_id'
        team_id.textContent = `Represent Team Log: ${this.team_id}`


        playerDiv.append(name, age, gender, team_name, hight, birth_country, position, jersey_number, team_id)
        document.body.appendChild(playerDiv);
        
    }
    
};


















