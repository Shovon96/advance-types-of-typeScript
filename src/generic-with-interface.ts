{

    // Generic With type Alias and Interface

interface Developer<T, X = null> {
    name: string,
    computer: {
        brand: string,
        model: string,
        releaseYear: number,
    },
    smartWatch: T,
    bike?: X
}

type EmilabWatch = {brand: string, model: string, display: string}

const poorDeveloper : Developer<EmilabWatch> = {
    name: 'Hablu',
    computer: {
        brand: 'HP',
        model: 'NHZ34',
        releaseYear: 2018
    },
    smartWatch: {
        brand: 'Emilab',
        model: 'Ew24',
        display: 'Zaro'
    }
}

interface AppleWatch {brand: string, model: string, hartTrack: boolean, sleepTrack: boolean}
interface YamahaBike {brand: string, releaseYear: number, engienCapacity: string}
const richDeveloper : Developer<AppleWatch, YamahaBike> = {
    name: 'Gablu',
    computer: {
        brand: 'MAC',
        model: 'LOAF42',
        releaseYear: 2022
    },
    smartWatch: {
        brand: 'Apple',
        model: 'FWI93',
        hartTrack: true,
        sleepTrack: true
    },
    bike: {
        brand: 'Yamaha',
        releaseYear: 2020,
        engienCapacity: '250cc'
    }
}



}