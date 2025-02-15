const removeFromArray = function(array, ...args) {
    let result = []

    array.forEach(e => {
        if(!args.includes(e)) result.push(e)
    })

    return result
};

// Do not edit below this line
module.exports = removeFromArray;
