const arrayNumbers = [1, 2, 3, 4, 5]

const minMaxSum = arr => {
    let resultOfArrayNumbersSum = []
    for (let number of arr) resultOfArrayNumbersSum.push(arr.filter(value => value !== number).reduce((acumulator, currentValue) => acumulator + currentValue))
    return [`min: ${Math.min(...resultOfArrayNumbersSum)}`,`max: ${Math.max(...resultOfArrayNumbersSum)}`]
}

console.log(minMaxSum(arrayNumbers)) // return ['min: 10', 'max: 14']