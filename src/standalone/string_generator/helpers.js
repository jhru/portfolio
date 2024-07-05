const ALPHABET = {
    UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    LOWER: 'abcdefghijklmnopqrstuvwxyz',
    NUMBER: '0123456789',
    SYMBOL: '!@#$%^&*()-_=+'
}

const generateAlphabet = data => {
    const { upper, lower, number, symbol } = data
    let alphabet = ''
    if (upper) alphabet += ALPHABET.UPPER
    if (lower) alphabet += ALPHABET.LOWER
    if (number) alphabet += ALPHABET.NUMBER
    if (symbol) alphabet += ALPHABET.SYMBOL
    return alphabet === '' ? null : alphabet
}

const checkVariables = (alphabet, amount) => {
    let response = {}
    if (alphabet === null && amount === 0) {
        response.success = false
        response.result = '#длина_алфавит_где'
    } else if (alphabet === null && amount !== 0) {
        response.success = false
        response.result = '#алфавит_пустой'
    } else if (amount === 0 && alphabet !== null) {
        response.success = false
        response.result = '#длина_нулевая'
    } else {
        response.success = true
    }
    return response
}

const generateString = (alphabet, amount) => {
    let response = ''
    for (let i = 0; i < amount; i++) {
        const random = Math.floor(Math.random() * alphabet.length)
        response += alphabet[random]
    }
    return response
}

const createString = ({ data, state }) => {
    const alphabet = generateAlphabet(data)
    const checking = checkVariables(alphabet, data.amount)
    if (checking.success === false) {
        state(prev => ({
            ...prev,
            result: checking.result
        }))
        return
    }
    const generated = generateString(alphabet, data.amount)
    state(prev => ({
        ...prev,
        result: generated
    }))
}

const animateElement = (element, style) => {
    element.classList.add(style)
    setTimeout(() => element.classList.remove(style), 150)
}

export { createString, animateElement }
