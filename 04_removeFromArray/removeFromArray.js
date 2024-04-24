const removeFromArray = function(removeFromThese,...removeThese) {

    //remover function to for loop over removeThese, is equal?
    function remover(currentValue){
        for(let i = 0; i < removeThese.length; i++){
            
          if ( currentValue === removeThese[i]){
            return false;
          }
        }
        return true
    }
    return removeFromThese.filter(remover)
};

// Do not edit below this line
module.exports = removeFromArray;
