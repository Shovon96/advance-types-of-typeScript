{

    // Generic Type

// const rollNumbers : number[] = [1, 3, 5, 6, 12]; // Norlam type declaration
const rollNumbers : Array<number> = [1, 3, 5, 6, 12]; // Generic type declaration

// const mentors : string[] = ['X', 'Y', 'Z'] // Norlam type declaration
const mentors : Array<string> = ['X', 'Y', 'Z'] // Generic type declaration

// const booleanArray : boolean[] = [true , false] // Norlam type declaration
const booleanArray : Array<boolean> = [true , false] // Generic type declaration


// Make this Generic type as dynamic

type GenericArray<T> = Array<T>
const rollNumbers2 : GenericArray<number> = [1, 3, 5, 6, 12]; // Generic type declaration

const mentors2 : GenericArray<string> = ['X', 'Y', 'Z'] // Generic type declaration

const booleanArray2 : GenericArray<boolean> = [true , false] // Generic type declaration


// Use generic type with array of object

const User : GenericArray<{name : string, age : number, gender : string}> = [
    {
        name: 'Hablu',
        age: 23,
        gender: 'Male'
    },
    {
        name: 'Jaylu',
        age: 21,
        gender: 'Female'
    }
]


// Use generic type with tuple

type GenericTuple<X,Y> = [X,Y]

const human : GenericTuple<string, string> = ['Mr. X', 'Mss. Y']

const userInfo : GenericTuple<number, {name: string, gender: string, mail: string}> = [234, {name: 'Hablu', gender: 'Male', mail: 'hablu@example.com'}]


}