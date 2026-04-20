// const x = 6;

// if (typeof x === "string") {
//   console.log("x is a string");
// } else {
//   console.log("x is not a string");
// }

// instanceOf

// class Person {}

// const p = new Person();

// if (p instanceof Person) {
//   console.log("p is instance of Person");
// } else {
//   throw new Error("p is not instance of person");
// }

// class Recangle1 {
//   protected width: number;
//   protected height: number;
//   constructor(width: number, height: number) {
//     this.height = height;
//     this.width = width;
//   }

//   setWidth(width: number): void {
//     this.width = width;
//   }

//   setHeight(height: number) {
//     this.height = height;
//   }

//   getArea(): number {
//     return this.height * this.width;
//   }
// }

// class Square1 extends Recangle1 {
//   constructor(size: number) {
//     super(size, size);
//   }

//   setWidth(width: number): void {
//     this.width = width;
//     this.height = width;
//   }

//   setHeight(height: number): void {
//     this.width = height;
//     this.height = height;
//   }
// }

// function resizeRecangle(shape: Recangle1): void {
//   shape.setWidth(10);
//   shape.setHeight(5);

//   console.log(shape.getArea());
// }

// resizeRecangle(new Recangle1(1, 1));
// resizeRecangle(new Square1(1));

// interface IUser {
//   getAll(): string;
//   getOne(): string;
//   updateOne(): string;
// }

// abstract class ABUser {
//   abstract getOne(): string;

//   log() {
//     console.log("hamada");
//   }
// }

// class User extends ABUser {
//   getOne(): string {
//     return "dasdsa";
//   }
// }

// const u = new User();
// u.log();

// interface Shape {
//   getArea(): number;
// }

// class Recangle implements Shape {
//   private width: number;
//   private height: number;

//   constructor(width: number, height: number) {
//     this.height = height;
//     this.width = width;
//   }

//   getArea(): number {
//     return this.width * this.height;
//   }

//   resize(width: number, height: number): Recangle {
//     return new Recangle(width, height);
//   }
// }

// class Square implements Shape {
//   private side: number;
//   constructor(side: number) {
//     this.side = side;
//   }
//   getArea(): number {
//     return this.side * this.side;
//   }

//   resize(side: number): Square {
//     return new Square(side);
//   }
// }

// const rect = new Recangle(10, 20);
// const sq = new Square(20);

// function printShapeArea(shape: Shape) {
//   console.log("Area: ", shape.getArea());
// }

// printShapeArea(sq);

interface Bird {
  eat(): void;
}

interface Flyable extends Bird {
  fly(): void;
}

interface Swim extends Bird {
  swim(): void;
}

class Eagle implements Flyable {
  eat(): void {
    console.log("eagle is eating");
  }

  fly(): void {
    console.log("eagle is flying");
  }
}

class Duck implements Swim {
  eat(): void {
    console.log("duck is eating");
  }
  swim(): void {
    console.log("duck is swimming");
  }
}

class SuperBird implements Flyable, Swim {
  eat(): void {}

  fly(): void {}

  swim(): void {}
}

function logBirdsFlying(birds: Flyable[]) {
  birds.forEach((bird) => {
    bird.fly();
  });
}

const birds: Flyable[] = [new Eagle()];

logBirdsFlying(birds);
