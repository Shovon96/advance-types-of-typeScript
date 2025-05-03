{
    // generic constraint with keyof operator

type Richman = {
    bike: string,
    car: string,
    ship: string
}

// type Owner = 'bike' | 'car' | 'ship' // Manually
type Owner = keyof Richman

// generic constraint with keyof operator with fuction

const getPropertyValue = <X,Y extends keyof X> (obj: X, key: Y) => {
    return obj[key];
}

const user = {
    name: 'Hablu',
    age: 44,
    email: 'hablu@example.com'
}


const result = getPropertyValue(user, 'name')

}