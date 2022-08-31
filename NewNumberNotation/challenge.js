const isNumberNotation = number => {
    for (let n = 1; n < Infinity; n++) {
        let formula = 5 ** n - 2
        let isNumberNotation = formula === number ? true : false

        if (isNumberNotation) return `É desse tipo`
        else if(formula > number)
        return `Não é desse tipo`
    }
}

console.log(isNumberNotation(5))
