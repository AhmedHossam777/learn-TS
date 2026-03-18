// GENERICS
function identity<T>(value: T): T {
    return value
}

identity<number>(20)

identity<string>("20")

identity<boolean>(true)