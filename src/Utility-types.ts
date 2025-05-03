{
    // Utility types

    type Person = {
        name: string;
        age: number;
        email?: string;
        phoneNo: string;
    }
    
    // Pick mane hocche kono ekta object theke kono akta property ke tule niye asha
    type PickProperty = Pick<Person, 'name' | 'age'>

    // Omit hocche kono akta object theke property gula baad deya
    type ContactInfo = Omit<Person, 'name' | 'age'>

    // Required hocche kono property jodi optional thake setakeo required kore dibe.
    type RequiredProperty = Required<Person>
    
    // Partial hocche object er sobgulo property ke optional kore dibe.
    type PartialProperty = Partial<Person>

    // Readonly er maddhome value porobortite change kora jabe na, sudhu read kora jabe.
    type PersonReadOnly = Readonly<Person>

    // Record 
    type MyObj = Record<string, unknown>;
    const emptyObj : Record<string, unknown>= {}
    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd",
        e: 6,
      };


}