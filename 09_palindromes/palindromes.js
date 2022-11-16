const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g,"")
    const strReverse = string.split("").reverse().join("");
    return strReverse === string;
};

// Do not edit below this line
module.exports = palindromes;
