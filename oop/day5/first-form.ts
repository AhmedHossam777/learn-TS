//! First Form

abstract class Animal{
    abstract tellType():string;

    print():void{
        console.log(this.tellType())
    }
}

class Dog extends Animal{
    tellType() {
        return 'this is dog'
    }

    override print() {
        console.log('this is overriden method')
    }
}

class Cat extends Animal{
    tellType() {
        return 'this is cat'
    }
}

const cat = new Cat()
const dog = new Dog()

const animals: Animal[] = [cat, dog]

animals.forEach(a => a.print())

