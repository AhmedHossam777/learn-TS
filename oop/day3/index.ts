const obj: Playable = {
	name: "ahmed",
	play() {
		console.log("playing...");
	},
};

interface Playable {
	name: string;
	play(): void;
}

abstract class GG {
	abstract score(): void;
}

class Animal extends GG {
	constructor(
		public name: string,
		protected age: number,
	) {
		super();
		console.log("Parent constructor called ...");
	}
	eat() {
		console.log(`eating ...`);
	}
	score(): void {}

	play(): void {}
}

class Dog extends Animal {
	constructor(name: string, age: number) {
		super(name, age);
	}

	bark() {
		console.log("barking ...");
	}
}

class Cat extends Animal {
	constructor(name: string, age: number) {
		super(name, age);
	}

	meow() {
		console.log("meowing ...");
	}
}

class Bird extends Animal {
	constructor(name: string, age: number) {
		super(name, age);
	}

	fly() {
		console.log("flying ...");
	}
}

const cat = new Cat("gg", 5);
const bird = new Bird("gggg", 5);
const dog = new Dog("ggg", 5);

cat.eat();
cat.meow();
bird.fly();

dog.bark();
