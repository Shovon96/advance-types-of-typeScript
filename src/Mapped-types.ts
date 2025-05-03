{
    // Mapped types hocche js er map method er mothoi, but aktu advance

    // Normal js map use by number to string
    const arrayOfNumber : number[] = [1, 4, 6, 5];
    // const arrayOfString : string[] = ['2', '4', '6'];

    const arrayOfString : string[] = arrayOfNumber.map((number) => number.toString())
    // console.log(arrayOfString)

    type AreaNumber = {
        height: number;
        width: number;
    }

    // type AreaString = {
    //     height: string;
    //     width: string
    // }

    // change the type using by 'Mapped type'
    // type AreaString = {
    //     [key in keyof AreaNumber] : string
    // }

    // Now change the type using by 'Mapped type' and made it dynamic with 'Generic'
    type AreaString <T> = {
        [key in keyof T] : T[key]
    }

    const area1 : AreaString<{height: string; width: number}> = {height: '112', width: 25}

}