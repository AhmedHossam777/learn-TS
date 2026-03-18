// interface P

interface Shape {
    area(): number;

    perimeter(): number;
}

class Circle implements Shape {
    constructor(private readonly radius: number) {
    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius
    }
}

class Rectangle implements Shape {
    constructor(private readonly w: number, private readonly h: number) {

    }

    area(): number {
        return this.w * this.h;
    }

    perimeter(): number {
        return 2 * (this.w + this.h);
    }
}

const c = new Circle(20)
const rect = new Rectangle(10,5)

console.log(c.area())
console.log(c.perimeter())


console.log(rect.area())
console.log(rect.perimeter())