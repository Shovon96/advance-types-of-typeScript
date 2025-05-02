{
// Interface type kichuta type of Alias er motoi.
// 

// Type of Interface and Type of Alias.

// interface 
interface User1 {
    name: string,
    age: number,
    gender: string
}
interface UserWithRole1 extends User1 {role: string} // interface use kore kono property add korte caile 'extends' use korte hoy

const user1 : UserWithRole1 = {
    name: 'Hablu',
    age: 23,
    gender: 'Male',
    role: 'Student'
}

// Alias
type User2 = {
    name: string,
    age: number,
    gender: string
}
type UserWitRole2 = User2 & {role: string} // Alias use kore kono property add korte caile '&(intersection)' use korte hobe.

const user2 : UserWitRole2 = {
    name: 'Gablu',
    age: 24,
    gender: 'Male',
    role: 'Student'
}


// js --> Object, Array --> Object, Function --> Object

type Roll1 = number[]

interface Roll2 {
    [ index: number] : number
}

const rollNumber : Roll2 = [1, 2, 3, 4]


// function er khetre type 'alias' and 'interface' use kora.
type Add1 = (num1 : number, num2 : number) => number
interface Add2 {
    (num1: number, num2: number) : number
}
    const add1 : Add1 = (num1, num2) => num1 + num2
    const add2 : Add2 = (num1, num2) => num1 + num2

}