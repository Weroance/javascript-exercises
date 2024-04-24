const removeFromArray = function(removeFromThese,...removeThese) {
  return removeFromThese.filter(val => !removeThese.includes(val))
        //   return array.filter(val => !args.includes(val))
        // }
};


// Do not edit below this line
module.exports = removeFromArray;
