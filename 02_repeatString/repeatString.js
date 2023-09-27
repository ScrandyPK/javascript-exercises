const repeatString = function (word, times) {
    let output = "";
    if (times < 0){
        return 'ERROR';
    }
    for (let i = 0; i < times; i++){
        output += word;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
