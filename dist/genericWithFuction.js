"use strict";
{
    // Generic with Function with type alias and interface type
    const createArray = (param) => {
        return [param];
    };
    createArray('Bangladesh');
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const resGeneric = createArrayWithGeneric(true);
    const resGenericObj = createArrayWithGeneric({ id: 8843, name: 'Bulbul', isMarried: false });
    const createArrayWithGenericTuple = (param1, param2) => {
        return [param1, param2];
    };
    const resGenericTuple = createArrayWithGenericTuple('Hello World', 999);
    const resGenericTupleObj = createArrayWithGenericTuple('Hello', { id: 8843, name: 'Bulbul', isMarried: false });
    // One more example as generic with fuction
    const addCoursToStudent = (student) => {
        const course = 'Next Level Web Developer';
        return Object.assign(Object.assign({}, student), { course });
    };
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
