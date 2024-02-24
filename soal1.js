const { Square, Rectangle } = require("./module/2d");

const square = new Square(3);
console.log("square class: ");
console.log(`Area: ${square.area()}`);
console.log(`Perimeter: ${square.perimeter()}`);

const rectangle = new Rectangle(2, 6);
console.log("rectangle class: ");
console.log(`Area: ${rectangle.area()}`);
console.log(`Perimeter: ${rectangle.perimeter()}`);
