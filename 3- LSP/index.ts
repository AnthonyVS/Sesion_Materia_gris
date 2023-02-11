class Shape {
    area() {
      throw new Error('The area method must be implemented');
    }
}
  
class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
      super();
    }
  
    area() {
      return this.width * this.height;
    }
}
  
class Square extends Rectangle {
    constructor(side: number) {
      super(side, side);
    }
}
  
function calculateArea(shape: Shape) {
    return shape.area();
}
  
const rectangle = new Rectangle(10, 5);
console.log(calculateArea(rectangle));
  
const square = new Square(7);
console.log(calculateArea(square));
  