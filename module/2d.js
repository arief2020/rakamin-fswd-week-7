/**
 * Shape class is an abstract class representing a geometric shape.
 * It defines methods to calculate area and perimeter, which must be implemented by subclasses.
 */
class Shape {
  /**
   * Constructor for Shape class.
   * @throws {Error} Cannot instantiate abstract class
   */
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class");
    }
  }

  /**
   * Calculate the area of the shape.
   * @abstract
   * @returns {number} The area of the shape.
   * @throws {Error} Method 'area()' must be implemented.
   */
  area() {
    throw new Error("Method 'area()' must be implemented");
  }

  /**
   * Calculate the perimeter of the shape.
   * @abstract
   * @returns {number} The perimeter of the shape.
   * @throws {Error} Method 'perimeter()' must be implemented.
   */
  perimeter() {
    throw new Error("Method 'perimeter()' must be implemented");
  }
}

/**
 * Represents a rectangle shape.
 * @extends Shape
 */
class Rectangle extends Shape {
  /**
   * Create a new instance of Rectangle.
   * @param {number} length - The length of the rectangle.
   * @param {number} width - The width of the rectangle.
   */
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  /**
   * Calculate the area of the rectangle.
   * @override
   * @returns {number} The area of the rectangle.
   */
  area() {
    return this.length * this.width;
  }

  /**
   * Calculate the perimeter of the rectangle.
   * @override
   * @returns {number} The perimeter of the rectangle.
   */
  perimeter() {
    return 2 * (this.length + this.width);
  }
}

/**
 * Represents a square shape.
 * @extends Shape
 */
class Square extends Shape {
  /**
   * Create a new instance of square.
   * @param {number} side - The length of the sides of the square.
   */
  constructor(side) {
    super();
    this.side = side;
  }

  /**
   * Calculate the area of the square.
   * @override
   * @returns {number} The area of the square.
   */
  area() {
    return this.side * this.side;
  }

  /**
   * Calculate the perimeter of the square.
   * @override
   * @returns {number} The perimeter of the square.
   */
  perimeter() {
    return 4 * this.side;
  }
}

module.exports = { Rectangle, Square };
