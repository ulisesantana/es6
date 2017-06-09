class Character {
    constructor(id, name, x, y){
        if( new.target === Character){
            throw new Error("Character class can't be instantiated");
        }
        
        this.id = id;
        this.name = name;
        this.x = x || Math.floor( Math.random() * 10);
        this.y = y || Math.floor( Math.random() * 10);
    }

    get position(){
        return {
            x: this.x,
            y: this.y
        }
    }

}

class PlayerCharacter extends Character{
    constructor(id, name, x, y){
        super(id, name, x, y);
    }
}

class NonPlayerCharacter extends Character{
    constructor(id, name){
        super(id, name);
    }
}