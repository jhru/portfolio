const calculateResult = ({ data, state }) => {
    // стороны в миллиметрах, потому делим на 1000*1000*1000
    const volume = data.len * data.wid * data.hei
    const weight = (volume * data.den) / 1e9
    state(prev => ({
        ...prev,
        result: weight.toFixed(2)
    }))
}

const animateElement = (element, style) => {
    element.classList.add(style)
    setTimeout(() => element.classList.remove(style), 150)
}

export { calculateResult, animateElement }
