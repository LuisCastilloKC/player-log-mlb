class Player{
    constructor(id, name, age, gender, team_name, hight, birth_country, position, jersey_number){
        this.id = id
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.team_name = team_name;
        this.hight = hight;
        this.birth_country = birth_country;
        this.position = position;
        this.jersey_number = jersey_number
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

        playerDiv.append(name, age, gender)
        document.body.appendChild(playerDiv);
        
    }
    
};

