interface Playable {
    play(name: string): void

    // methods
    read(content: string): string

    name: string
}

const obj: Playable = {
    name: 'ahmed',
    play(name: string) {
        console.log(`${name} is playing`)
    },
    read(content: string) {
        return content
    }
}

obj.play("ahmed")

// class Person implements Playable {
//     name: string = 'ahmed';
//
//     play(name: string) {
//     }
//
//     read(content: string): string {
//         return content
//     }
// }

// Abstract classes
abstract class Eatable {
    eat() {
        console.log("this is eat func")
    }

    abstract read(content: string): string
    abstract name :string

}


class Person extends Eatable {
    name = 'ahmed'
    read(content: string): string {
        return "";
    }
}

class Student extends Eatable {
    name = 'ahmed'
    read(content: string): string {
        return "";
    }
}


const p = new Person()

p.eat()
