const sumAll = function(a, b) {
    let add = 0;
    if (Number.isInteger(a) === false || Number.isInteger(b) === false){
        return 'ERROR'
    } else if (a < 0 || b < 0){
        return 'ERROR';
    }else if (a < b){
        for (i = a; i <= b ; i++){
            add += i;        
        }
    }else if (b < a){
            let backA = b;
            let backB = a;
            for (i = backA; i <= backB ; i++){
                add += i; 
        }
        }
    return add;
};

// Do not edit below this line
module.exports = sumAll;
