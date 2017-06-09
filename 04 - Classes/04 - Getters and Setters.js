class Square {
    constructor(width){
        this.squareWidth = width;
    }

    get width(){
        return this.squareWidth;
    }

    set width(h){
        this.squareWidth = h;
    }

    get area(){
        return this.width * this.width;
    }
}

let square = new Square(5);

console.log('Area: %d   Width: %d', square.area , square.width);

square.width = 10;

console.log('Area: %d   Width: %d', square.area , square.width);