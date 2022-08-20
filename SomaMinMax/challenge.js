const arrayNumbers = [1, 2, 3, 4, 5]

function filterMinMaxNumbers() {
    let sumOfArrayNumbers = []

    for (let i = 0; i < arrayNumbers.length; i++) {
        let sumNumberArray = 0

        arrayNumbers.forEach(function (value) {
            value !== arrayNumbers[i]
                ? (sumNumberArray += value)
                : (sumNumberArray += 0)
        })
        sumOfArrayNumbers.push(sumNumberArray)
    }

    let max = 0
    for (let number of sumOfArrayNumbers) {
        if (number > max) max = number
    }

    let min = max
    for (let number of sumOfArrayNumbers) {
        if (number < min) min = number
    }

    return ['min: ' + min, 'max: ' + max]
}

console.log(filterMinMaxNumbers())
// return ['min: 10', 'max: 14']
