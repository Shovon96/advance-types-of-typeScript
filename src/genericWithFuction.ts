{
    // Generic with Function with type alias and interface type
const createArray = (param : string) => {
    return [param]
}
createArray('Bangladesh');

const createArrayWithGeneric = <T>(param: T ) : T[] => {
    return [param]
}

const resGeneric = createArrayWithGeneric<boolean>(true);

interface UserInfo { id: number, name: string, isMarried: boolean}
const resGenericObj = createArrayWithGeneric<UserInfo>({id: 8843, name: 'Bulbul', isMarried: false})


const createArrayWithGenericTuple = <X, Y>(param1: X, param2: Y ) : [X, Y]=> {
    return [param1, param2]
}

const resGenericTuple = createArrayWithGenericTuple<string, number>('Hello World', 999);

interface UserInfo2 { id: number, name: string, isMarried: boolean}
const resGenericTupleObj = createArrayWithGenericTuple<string, UserInfo2>('Hello', {id: 8843, name: 'Bulbul', isMarried: false})


// One more example as generic with fuction
const addCoursToStudent = <T>(student: T) => {
    const course = 'Next Level Web Developer'
    return { ...student, course}
}

const student1 = addCoursToStudent({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD"
  });
  const student2 = addCoursToStudent({
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch"
  });


}