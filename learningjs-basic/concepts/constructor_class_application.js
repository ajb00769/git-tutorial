class Character {
    constructor(name="character", strength=10, intelligence=10, vitality=10) {
        this.name = name;
        this.vitality = vitality;
        this.strength = strength;
        this.intelligence = intelligence;
    }

    introduce() {
        console.log("Hello my name is " + this.name);
    }
}

const player1 = new Character();

console.log(player1.name);
console.log(player1.strength);
console.log(player1.intelligence);
console.log(player1.vitality);

Character.prototype.getStrength = function() {
    return this.strength;
}

player1.introduce();
console.log("My strength level is " + player1.getStrength());

class Champion extends Character {
    constructor(name="champion", strength=50, intelligence=50, vitality=50) {
        if (strength < 50) {
            throw new Error("Champion strength cannot be lower than 50");
        } else if (intelligence < 50) {
            throw new Error("Champion intelligence cannot be lower than 50");
        } else if (vitality < 50) {
            throw new Error("Champion vitality cannot be lower than 50");
        } else {
            super(name, strength, intelligence,vitality)
        }
    }
}

const player2 = new Champion("Carlos");
console.log(player2.name + " has a strength level of " + player2.strength);

class DeathKnight extends Character {
    constructor(name="death knight", strength=100, intelligence=100, vitality=100) {
        super (
            name,
            strength < 100 ? 100 : strength,
            intelligence < 100 ? 100 : intelligence,
            vitality < 100 ? 100 : vitality
        );
    }
}

const player3 = new DeathKnight("Miguel", 5, 10, 15, 20);
console.log(player3.name);
console.log(player3.getStrength());
console.log(player3.intelligence);
console.log(player3.vitality);