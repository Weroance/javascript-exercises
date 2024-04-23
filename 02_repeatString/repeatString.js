const repeatString = function(stringParam, repetitionParam) {
    let stringConcat = ''
    if (repetitionParam >= 0){
        for (i = 0; i < repetitionParam; ++i){
            stringConcat += stringParam;
        }
    }
    else{
        stringConcat = 'ERROR';
        repetitionParam = 1   
    }
    return stringConcat
}

// Do not edit below this line
module.exports = repeatString;
