const findTheOldest = function(arr) {
    date = new Date()
    thisYear = date.getFullYear()
    function compare(a,b){
        let returnValue = 0
        if (!Object.keys(a).includes('yearOfDeath')) {a.yearOfDeath = thisYear; a.alive = 1};
        if (!Object.keys(b).includes('yearOfDeath')) {b.yearOfDeath = thisYear; b.alive = 1};
        
        if ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) returnValue =  1;
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) returnValue = -1;
        // remove death year if alive
        if (Object.keys(a).includes('alive')) { delete a.yearOfDeath ; delete a.alive };
        if (Object.keys(b).includes('alive')) { delete b.yearOfDeath ; delete b.alive };
        return returnValue
    }
    
    arr.sort(compare)
    return arr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
