const palindromes = function (input) {
    cleaned = input
    //.replace(/\d/g,'')
    .replace(/\W/g,'')
    .toLowerCase();
    output = cleaned
    .split('')
    .reverse()
    .join('');
    return cleaned === output

};

// Do not edit below this line
module.exports = palindromes;
