{
    // Conditional types hocche jokhon kono akta type onno akta type er 
    // upor nirbhor kore tokhon muloto 'Conditional types' use kora hoy.


    type X = null
    type Y = string

    type Z = X extends null ? true : false // Conditional types
    type A = X extends number ? true : Y extends undefined ? true : any

    type richMan = {
        name: string,
        bike: string,
        car: string,
        ship: string
    }

    type CheckVehicle<T> = T extends keyof richMan ? true : false;

    type HasHave = CheckVehicle<'car'>

}