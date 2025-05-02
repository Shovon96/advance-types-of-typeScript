"use strict";
{
    // Constraints
    const addCoursToStudent = (student) => {
        const course = 'Next Level Web Developer';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCoursToStudent({
        id: 5633,
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD"
    });
    const student2 = addCoursToStudent({
        id: 5432,
        name: "Mr Y",
        email: "y@gmail.com",
        hasWatch: "Apple Watch"
    });
    const student3 = addCoursToStudent({
        id: 5443,
        name: 'Mr Z',
        email: 'z@gmail.com',
        isSignle: false
    });
}
