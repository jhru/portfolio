const createGradientString = data => {
    return data.join(', ')
}
const createGradientCode = data => {
    return `background: linear-gradient(90deg, ${data});`
}
const createGradientStyle = data => {
    return { background: `linear-gradient(90deg, ${data.join(', ')})` }
}
const createColorStyle = data => {
    return { backgroundColor: data }
}

const animateElement = (element, style, pause) => {
    element.classList.add(style)
    setTimeout(() => element.classList.remove(style), pause)
}

export {
    createGradientString,
    createGradientCode,
    createGradientStyle,
    createColorStyle,
    animateElement
}
