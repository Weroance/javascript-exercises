const fibonacci = function(input) {
    let number = Number(input)
if(number > 0){  
    let arr = [0,1];
    let leng = 0
    
        for(let i = 1; i < number; i++ ){;
            leng = arr.length - 1;
            arr.push( arr[leng] + arr[leng - 1] );
};
    return arr[arr.length - 1];
}
else if( number < 0){return 'OOPS'}
else{ return 0}
}
// Do not edit below this line
module.exports = fibonacci;
