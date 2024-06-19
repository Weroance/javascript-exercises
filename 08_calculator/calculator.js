const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a) {
 return a.reduce((accumulator,item) => {return accumulator += item}, 0 )
};

const multiply = function(a) {
  return a.reduce((accumulator,item) => {return accumulator *= item} )
 };

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  let arr = []
	for (let i = a; i > 0; i--) {
    arr.push(i)
  }
  return arr.reduce((accumulator,item) => { return accumulator *= item } , 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
