const reverseString = function(word) {
    let first = word.split("");
    let second = first.reverse();
    let third = second.join("");
    return third;
};

// Do not edit below this line
module.exports = reverseString;
