const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0) {
        return "ERROR"
    } else if (typeof int1 !== "number" || typeof int2 !== "number") {
        return "ERROR"
    }

    const min = int1 < int2 ? int1 : int2;
    const max = int1 > int2 ? int1 : int2;
    let total = 0;

    for (i = min; i <= max; i++) {
        total += i;
    }

    return total;

};

// Do not edit below this line
module.exports = sumAll;
