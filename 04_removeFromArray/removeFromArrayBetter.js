const removeFromArray = function(removeFromThese,...removeThese) {

  return removeFromThese.filter(currentValue => !removeThese.includes(currentValue))
};


// Do not edit below this line
module.exports = removeFromArray;
