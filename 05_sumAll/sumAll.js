const sumAll = function(a,b) {
    let sum = 0
    if (
        ( a < 0 ) || 
        ( b < 0 ) || 
        ( typeof a !== 'number') ||
        (typeof b !== 'number')){ 
        return 'ERROR'
    }
    if ( a < b )   { 
        low = a;
        high = b 
    }
    else{
         low = b; 
         high = a;
    }
    while( low <= high ){
        
        sum += low;
        low++;
    }
  
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
