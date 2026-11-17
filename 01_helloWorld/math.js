
// Common js export method 

function add(a ,b) {
    return a + b ;
}
function sub(a , b) {
    return a - b ;
}

module.exports = {add, sub}

// ES Module export method

export function multiply(a , b) {
    return a * b ;
}
export function divide(a , b) {
    return a / b ;
}