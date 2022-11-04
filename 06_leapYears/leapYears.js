const leapYears = function(year) {
    const byFour = year / 4;
    const byHundred = year / 100;
    const byFourHundred = year / 400;

    if (byFour === Math.floor(byFour)) {
        if (byHundred === Math.floor(byHundred)) {
            if (byFourHundred === Math.floor(byFourHundred)) {
                return true;
            } return false;
        } return true;
    } return false;
};

// Do not edit below this line
module.exports = leapYears;
