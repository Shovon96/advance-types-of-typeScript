"use strict";
{
    // generic constraint with keyof operator with fuction
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'Hablu',
        age: 44,
        email: 'hablu@example.com'
    };
    const result = getPropertyValue(user, 'name');
}
