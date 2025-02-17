const palindromes = function (text) {
    const textInReverse = text.split('').reverse().join('')
    const textInReverseClean = textInReverse.replace(/[.,!\s]/gi, '').toLowerCase()
    const textClean = text.replace(/[.,!\s]/gi, '').toLowerCase()
    if(textInReverseClean === textClean) {
        return true
    } else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
