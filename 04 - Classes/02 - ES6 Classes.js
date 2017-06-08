class Shape {
  constructor(color){
    this.color = color;
  }
  
  getColor(){
    return this.color;
  }
}

class Rectangle extends Shape {
  constructor(color, width, height){
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea(){
    return this.width * this.height;
  }
}


let rectangle = new Rectangle('yellow', 5, 8);
console.log(rectangle.getArea());
console.log(rectangle.getColor());
console.log(JSON.stringify(rectangle));
