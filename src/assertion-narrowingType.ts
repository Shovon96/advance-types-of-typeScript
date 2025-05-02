{

// type assertion hocche amon akti type je developer ke ondho bisshas kore,
// jodi developer kono type defined kore dey sekhetre typeScript kono error dhore na.

let anything : any;

anything = 'I am a next level developer'; // ekhane dekha jay anything er value any type.
anything = 84899 as number; // But jokhon 'as' diye type dicler kore dibo tokhon seta oi type er value defined korbe.

// one more example
const kgToGram = (value : string | number) : string | number | undefined => {
    if( typeof value === 'string'){
        const convertToNumber = parseFloat(value);
        if (isNaN(convertToNumber)) {
            return 'Please enter a valid number!';
        }
        const result = convertToNumber * 1000 ;
        return `There is: ${result} Gram`;
    }else if ( typeof value === 'number') {
        const result = value * 1000;
        return `Your value is: ${result} Gram`;
    }else {
        return 'Please enter the right value!'
    }
}

const stringTypeDefined = kgToGram('10') as string;
const numberTypeDefined = kgToGram(10) as number;

// console.log(kgToGram('gaewt'));

type customError = {
    msg: string;
}

try {

}catch (error){
    console.log((error as customError).msg)
}




}