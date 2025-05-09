let result = []
function addition(a,b){
    result.push(a + b)
    console.log('Added your result to the array', `${result}`)
}

function subtraction(a,b){
    result.push(a - b)
    console.log('Added your result to the array', `${result}`)
}

function multiplication(a,b){
    result.push(a * b)
    console.log('Added your result to the array', `${result}`)
}

function division(a,b){
    result.push(a / b)
    console.log('Added your result to the array', `${result}`)
}

function historyLog() {
    console.log('History of results:', `${result}`);
}

module.exports = { addition, subtraction, multiplication, division, historyLog, result };