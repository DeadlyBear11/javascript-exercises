const fibonacci = function(position) {
    if (position < 0) {
        return "OOPS";
    }
    
    const arr = [1, 1];
    for (let i = 1; i < position; i++) {
        let num1 = arr[i - 1];
        let num2 = arr[i];
        let sum = num1 + num2;
        arr.push(sum);
    }

    return arr[arr.length - 2];
};

// Do not edit below this line
module.exports = fibonacci;
