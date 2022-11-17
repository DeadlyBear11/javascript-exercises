const findTheOldest = function(arr) {
    const oldestPerson = arr.reduce((oldest, person) => {
        if (!person.yearOfDeath) {
            const currentYear = (new Date()).getFullYear();
            person.yearOfDeath = currentYear;
        }

        let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        let personAge = person.yearOfDeath - person.yearOfBirth;

        if (personAge > oldestAge) {
            oldest = person;
        }

        return oldest;

    }, {
        yearOfBirth: 1,
        yearOfDeath: 2,
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
