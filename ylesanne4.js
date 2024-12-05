class Shape {
  constructor(color) {
      this.color = color
  }

  getColor(){
      return this.color
  } 

  setColor(color) {
      this.color = color
  }

  getArea() {
      console.log('Area of shape')
  }
} 

class Circle extends Shape {
  constructor(color, radius) {
      super(color)
      this.radius = radius
  }

  getArea(){
      return Math.PI * Math.pow(this.radius, 2)
  } 

  print(){
      return `Circle (r: ${this.radius}, color: ${this.color}).`
  }
} 

class Square extends Shape {
  constructor(color, side) {
      super(color)
      this.side = side
  }

  getArea(){
      return this.side * this.side
  } 

  print(){
      return `Square (side: ${this.side}, color: ${this.color}).`
  }
} 

class Rectangle extends Shape {
  constructor(color, length, width) {
      super(color)
      this.length = length
      this.width = width
  }

  getArea(){
      return this.length * this.width
  } 

  print(){
      return `Rectangle (l: ${this.length}, w: ${this.width}, color: ${this.color}).`
  }
}

class Paint {
  constructor(){
      this.shapes = [] 
  }

  addShape(shape){
      this.shapes.push(shape)
  } 

  getShapes(){
      return this.shapes
  }

  calculateTotalArea(){
      let total = 0
      this.shapes.forEach(shape => {
          total += shape.getArea()
      })
      return total
  }

  getCircles(){
      return this.shapes.filter(shape => shape instanceof Circle) 
  }

  getSquares(){
      return this.shapes.filter(shape => shape instanceof Square) 
  }

  getRectangles(){
      return this.shapes.filter(shape => shape instanceof Rectangle) 
  }
}

const square1 = new Square('red', 5)
const square2 = new Square('blue', 5)
const circle = new Circle('green', 2)
const rectangle = new Rectangle('cyan', 3, 4)
const paint = new Paint()
paint.addShape(rectangle)
paint.addShape(square1)
paint.addShape(square2)
paint.addShape(circle)
console.log(paint)
console.log(paint.calculateTotalArea())
console.log(paint.getCircles())
console.log(paint.getSquares())
console.log(paint.getRectangles())